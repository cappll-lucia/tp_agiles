<script setup>
    import {  defineProps } from 'vue';
    import AhorcadoFigura from './AhorcadoFigura.vue';

 defineProps({
        vidasRestantes: Number,
        palabra: String,
        letrasCorrectas: Array
    });

</script>



<template>
    <div>
        <AhorcadoFigura :vidasRestantes="vidasRestantes" />
        <p v-if="vidasRestantes==0">¡Perdiste! La palabra era {{ palabra }}</p>
        <p v-else-if="palabra.split('').every(letra => letrasCorrectas.includes(letra))">¡Ganaste!</p>
    </div>
</template>