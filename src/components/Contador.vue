<template>
    <h2>Mi contador</h2>
    <p>{{ contador }}</p>
    <Button text="Menos" :onClickEvent="decrementa" />
    <Button text="Más" :onClickEvent="incrementa" />
    <br />
    <Seteador :setEvent="setContador" />
</template>

<script setup lang="ts">
import { ref } from "vue"
import Button from "./Button.vue"
import Seteador from "./Seteador.vue"

const contador = ref(0)

const incrementa = () => contador.value++
const decrementa = () => contador.value--

const setContador = (num: number) => contador.value = num
</script>
