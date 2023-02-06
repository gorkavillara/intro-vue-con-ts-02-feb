<template>
  <h1>Componente contadores</h1>
  <button @click="() => incrementa()">{{ contador }}</button>
  <button @click="() => incrementa2()">{{ contador2 }}</button>
  <div>
    <button @click="() => decrementa3(2)">Menos 2</button>
    <button @click="() => decrementa3()">Menos</button>
    <span>{{ contador3 }}</span>
    <button @click="() => incrementa3()">Más</button>
    <button @click="() => incrementa3(2)">Más 2</button>
  </div>
</template>

<script lang="ts" setup>
import { useContador } from "../utils/contadorComp";

const { contador, incrementa } = useContador();
const { contador: contador2, incrementa: incrementa2 } = useContador();
const {
  contador: contador3,
  incrementa: incrementa3,
  decrementa: decrementa3,
} = useContador(12);
</script>
