<script setup>
import { ref } from 'vue'
import Juego from './components/Juego.vue'
import ContenedorPalabra from './components/ContenedorPalabra.vue'
import Keyboard from './components/Keyboard.vue'
import { iniciarJuego, registrarJugador, arriesgarLetra } from '@/api'

const cantLetras = ref(0)
const letrasCorrectas = ref([])
const progreso = ref([])
const vidasRestantes = ref(6) //Max vidas = 6
const letrasUsadas = ref([])
const nombreIngresado = ref(false)
const registrado = ref(false)
const nombre = ref('')
const adivinoPalabra = ref(false)

async function adivinar(letra) {
  letrasUsadas.value.push(letra)
  try {
    const data = await arriesgarLetra(letra)
    console.log(data)
    if (data.resultado == 'LetraCorrecta') {
      letrasCorrectas.value.push(letra)
      progreso.value = data.progreso
      console.log(progreso.value)
    } else {
      vidasRestantes.value--
    }
    if (data.gano) {
      adivinoPalabra.value = true
    }
  } catch (error) {
    console.error('Error al adivinar la letra:', error)
  }
}

async function registrar() {
  try {
    await registrarJugador({ nombre: nombre.value })
    registrado.value = true
  } catch (error) {
    console.log('Error al iniciar el juego: ', error)
  }
}

async function jugar() {
  if (nombre.value.trim() !== '') {
    nombreIngresado.value = true
    try {
      const data = await iniciarJuego()
      cantLetras.value = Number(data.cantidadLetras)
      progreso.value = new Array(cantLetras.value).fill('_')
    } catch (error) {
      console.log('Error al iniciar el juego: ', error)
    }
  }
}
</script>

<template>
  <div class="main">
    <h1>- Juego del Ahorcado -</h1>
    <div v-if="!cantLetras">
      <div
        v-if="!registrado"
        class="nombre-form animate__animated animate__fadeInDown"
      >
        <label for="nombre">Ingresa tu nombre:</label>
        <input
          id="nombre"
          v-model="nombre"
          placeholder="Nombre"
          data-testid="input_nombre"
        />
        <button @click="registrar">Registrarse</button>
      </div>

      <div v-else class="nombre-form animate__animated animate__fadeInDown">
        <label for="nombre">Hola, {{ nombre }}!</label>
        <button @click="jugar">Comenzar juego</button>
      </div>
    </div>
    <div v-else class="area-juego animate__animated animate__fadeIn">
      <p class="welcome">Hola, {{ nombre }}!</p>
      <Juego
        :cantLetras="cantLetras"
        :vidasRestantes="vidasRestantes"
        :letras-correctas="letrasCorrectas"
      />
      <ContenedorPalabra
        :cantLetras="cantLetras"
        :letrasCorrectas="letrasCorrectas"
        :progreso="progreso"
      />
      <p v-if="vidasRestantes == 0">¡Perdiste!</p>
      <p v-if="adivinoPalabra">¡Ganaste!</p>
      <Keyboard
        v-if="vidasRestantes > 0 && !adivinoPalabra"
        @adivinarLetra="adivinar"
        :letrasUsadas="letrasUsadas"
      />
    </div>
  </div>
</template>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

* {
  box-sizing: border-box;
}

#app {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #121212;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
}

.main {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #76a141;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

.nombre-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(33, 33, 33, 0.8);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  animation: fadeInDown 0.5s ease-in-out;
}

input {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 8px;
  outline: none;
  font-size: 1em;
  width: 80%;
  text-align: center;
  background-color: #222;
  color: #e0e0e0;
}

.nombre-form button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #a8e063;
  border: none;
  border-radius: 10px;
  color: #121212;
  font-size: 1em;
  cursor: pointer;
  transition: 0.3s;
}

.nombre-form button:hover {
  background: #a8e063;
}

.area-juego {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(33, 33, 33, 0.9);
  backdrop-filter: blur(5px);
  width: 90vw;
}

.welcome {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #a8e063;
}

.welcome span {
  color: #ff6b6b;
}

.animate__animated {
  animation-duration: 0.8s;
}
</style>
