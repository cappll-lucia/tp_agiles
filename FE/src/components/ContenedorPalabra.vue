<script setup>
    import { defineProps } from 'vue';

    defineProps({
        palabra: String,
        letrasCorrectas: Array
    });
</script>

<template>
    <div class="cont-palabra">
        <span v-for="letra in palabra" :key="letra">
            {{ letrasCorrectas.includes(letra) ? letra : '_' }}
        </span>
    </div>
</template>

<style>

.cont-palabra{
    width: min-content;
    height: 3rem;
    margin: 2rem 0;
}
.cont-palabra span{
    font-size: 2rem;
    padding: 0.5rem 1.5rem;
    margin-right: 1.5rem;
    background-color: rgb(209, 199, 190);
    color: black;
    border-radius: 10px;
}
</style>