<script setup>
    import {  defineProps } from 'vue';
    import AhorcadoFigura from './AhorcadoFigura.vue';

 defineProps({
        vidasRestantes: Number,
        cantLetras: Number,
        letrasCorrectas: Array
    });

</script>



<template>
    <div>
        <AhorcadoFigura :vidasRestantes="vidasRestantes" />
    </div>
</template>