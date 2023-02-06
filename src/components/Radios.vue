<template>
  <form>
    <p>¿Cuál es tu lenguaje favorito?</p>
    <label>
      <input type="radio" value="Typescript" v-model="lenguajeFavorito" />
      <span>Typescript</span>
    </label>
    <label>
      <input type="radio" value="Javascript" v-model="lenguajeFavorito" />
      <span>Javascript</span>
    </label>
    <label>
      <input type="radio" value="Python" v-model="lenguajeFavorito" />
      <span>Python</span>
    </label>
    <label>
      <input type="radio" value="C#" v-model="lenguajeFavorito" />
      <span>C#</span>
    </label>
    <label>
      <input type="radio" value="COBOL" v-model="lenguajeFavorito" />
      <span>COBOL</span>
    </label>
    <label>
      <input type="radio" value="Visual Basic" v-model="lenguajeFavorito" />
      <span>Visual Basic</span>
    </label>
  </form>
  {{ lenguajeFavorito }}
</template>

<script lang="ts" setup>
import { ref } from "vue";
const lenguajeFavorito = ref("Typescript")
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>