<template>
    <button @click="log">{{ buttonText }}</button>
</template>

<script lang="ts" setup>
    const buttonText = "Botón"
    const log = () => console.log("Hola desde el botón")
</script>

<style scoped>
    button {
        border: none;
        padding: 0.5rem 1rem;
        background-image: linear-gradient(90deg, rgb(0, 255, 145), rgb(0, 124, 225));
        border-radius: 0.25rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }
    button:active {
        filter: brightness(80%);
    }
</style>