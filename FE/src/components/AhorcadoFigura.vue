<script setup>
import { defineProps } from 'vue';

 defineProps({
    vidasRestantes: Number
});
</script>

<template>
    <div>
        <div class="vidas">
            <p>Vidas Restantes: {{ vidasRestantes }}</p>
            <div class="vidas-iconos">
                <img v-for="vida in vidasRestantes" :key="vida" src="../assets/me-gusta.png" height="20px" />
            </div>
        </div>
        <div class="hangman">
            <!-- Cada una de estas partes se muestra solo cuando vidasRestantes es mayor o igual al valor correspondiente -->
            <div  class="hangman__base"></div>
            <div  class="hangman__pole"></div>
            <div  class="hangman__beam"></div>
            <div  class="hangman__rope"></div>
            <div v-if="vidasRestantes <= 5" class="hangman__head"></div>
            <div v-if="vidasRestantes <= 4" class="hangman__body"></div>
            <div v-if="vidasRestantes <= 3" class="hangman__left-arm"></div>
            <div v-if="vidasRestantes <= 2" class="hangman__right-arm"></div>
            <div v-if="vidasRestantes <= 1" class="hangman__left-leg"></div>
            <div v-if="vidasRestantes <= 0" class="hangman__right-leg"></div>
        </div>
    </div>
</template>


<style scoped>

.vidas{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.vidas img{
    margin-right: 0.5rem;
}
.hangman {
    position: relative;
    width: 100px;
    height: 200px;
    margin-top: 20px;
}

/* Estilos para las diferentes partes del ahorcado */
.hangman__base {
    width: 100px;
    height: 10px;
    background: #d6d1d1;
    position: absolute;
    bottom: 0;
}

.hangman__pole {
    width: 10px;
    height: 150px;
    background: #d6d1d1;
    position: absolute;
    left: 0;
    bottom: 10px;
}

.hangman__beam {
    width: 60px;
    height: 10px;
    background: #d6d1d1;
    position: absolute;
    left: 0;
    top: 0;
}

.hangman__rope {
    width: 2px;
    height: 20px;
    background: #d6d1d1;
    position: absolute;
    left: 55px;
    top: 10px;
}

.hangman__head {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #d6d1d1;
    position: absolute;
    left: 45px;
    top: 30px;
}

.hangman__body {
    width: 2px;
    height: 50px;
    background: #d6d1d1;
    position: absolute;
    left: 54px;
    top: 50px;
}

.hangman__left-arm {
    width: 20px;
    height: 2px;
    background: #d6d1d1;
    position: absolute;
    left: 34px;
    top: 60px;
    transform: rotate(-45deg);
}

.hangman__right-arm {
    width: 20px;
    height: 2px;
    background: #d6d1d1;
    position: absolute;
    left: 58px;
    top: 60px;
    transform: rotate(45deg);
}

.hangman__left-leg {
    width: 20px;
    height: 2px;
    background: #d6d1d1;
    position: absolute;
    left: 34px;
    top: 100px;
    transform: rotate(-45deg);
}

.hangman__right-leg {
    width: 20px;
    height: 2px;
    background: #d6d1d1;
    position: absolute;
    left: 58px;
    top: 100px;
    transform: rotate(45deg);
}
</style>