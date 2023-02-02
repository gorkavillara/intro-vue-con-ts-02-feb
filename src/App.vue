<script lang="ts" setup>
  //@ts-ignore
  import Input from "./components/Input.vue"
  //@ts-ignore
  import Button from "./components/Button.vue"
  const saludo = "Hola Vue"
</script>

<template>
  <h1>{{ saludo }}</h1>
  <Input />
  <Button />
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
