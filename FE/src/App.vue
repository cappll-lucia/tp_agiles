<script setup>
import { ref } from 'vue';
import Juego from './components/Juego.vue';
import ContenedorPalabra from './components/ContenedorPalabra.vue';
import Keyboard from './components/Keyboard.vue'


const palabra = ref('METODOLOGIAS'); 
const letrasCorrectas = ref([]);
const vidasRestantes = ref(6); // Máximo de vidas = 6
const letrasUsadas = ref([]);


function handleGuess(letra) {
  letrasUsadas.value.push(letra)
  if(palabra.value.includes(letra)){
    letrasCorrectas.value.push(letra)
  }else{
    vidasRestantes.value--;
  }
  letrasUsadas.value.push(letra)
}
</script>




<template>
  <div class="main">
    <h1>Juego de Ahorcado</h1>
    <Juego :palabra="palabra" :vidasRestantes="vidasRestantes" :letras-correctas="letrasCorrectas" />
    <ContenedorPalabra :palabra="palabra" :letrasCorrectas="letrasCorrectas" />
    <Keyboard @letterGuess="handleGuess" :letrasUsadas="letrasUsadas" />
  </div>
</template>

<style>
.main{
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
</style>