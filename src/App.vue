<script lang="ts" setup>
  //@ts-ignore
  import Input from "./components/Input.vue"
  const saludo = "Hola Vue"
</script>

<template>
  <h1>{{ saludo }}</h1>
  <Input />
  <Input />
  <Input />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
