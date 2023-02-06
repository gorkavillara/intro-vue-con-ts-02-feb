<template>
  <form>
    <p>¿Cuál es tu provincia?</p>
    <select v-model="provinciaSeleccionada">
      <option value="">Elige tu provincia</option>
      <option v-for="(provincia, index) in provinciasDisponibles" :key="index">
        {{ provincia }}
      </option>
    </select>
    {{ provinciaSeleccionada }}
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const provinciaSeleccionada = ref("");

const provinciasDisponibles = [
  "Guipúzcoa",
  "Salamanca",
  "Ávila",
  "Cáceres",
  "Sevilla",
  "La Habana"
];
</script>

<style scoped></style>
