<template>
  <h2>Confirma acciones</h2>
  <button v-confirma:click:dragstart="gestionaClic" draggable="true">Canta</button>
</template>

<script setup lang="ts">
import { DirectiveBinding } from "vue";

const gestionaClic = () => {
  console.log("En un lugar de la mancha de cuyo nombre no quiero acordarme");
};

const vConfirma = {
  mounted(el: HTMLButtonElement, binding: DirectiveBinding) {
    if (!binding.arg) return;
    console.log(binding.arg?.split(":"));
    binding.arg.split(":").forEach((listener) => {
      el.addEventListener(listener, () => {
        if (!confirm("⚠️ Seguro que quieres hacer esto?")) return;
        binding.value();
      });
    });
  },
};
</script>
