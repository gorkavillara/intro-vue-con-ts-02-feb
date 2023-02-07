<template>
  <p v-mi-directiva v-if="textoMostrado">{{ texto }}</p>
  <button @click="traduceTexto">Traduce texto</button>
  <button @click="toggleTexto">
    {{ textoMostrado ? "Esconde el texto" : "Muestra texto" }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const textoMostrado = ref(true);
const texto = ref("Hola mundo!");
const traduceTexto = () => {
  texto.value = "Hello world";
};
const toggleTexto = () => {
  textoMostrado.value = !textoMostrado.value;
};

const vMiDirectiva = {
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted(el: HTMLElement) {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
