<script lang="ts" setup>
  import Input from "./components/Input.vue"
  import Button from "./components/Button.vue"
  import Contador from "./components/Contador.vue"
  
  import PrimerComponente from "./components/PrimerComponente.vue"
  import DirectivasComponentes from "./components/DirectivasComponentes.vue"

  import PropsComponent from "./components/PropsComponent.vue"

  const saludo = "Hola Vue"

  const onClickEvent = () => {
    console.log("He hecho clic definido desde el padre")
  }
</script>

<template>
  <h1>{{ saludo }}</h1>
  <!-- <PropsComponent :nombres="['Ernesto', 'Sergio', 'Laura']" /> -->
  <!-- <DirectivasComponentes /> -->
  <!-- <PrimerComponente /> -->
  <Contador />
  <!-- <Input :requiredLength="3" /> -->
  <!-- <Input :requiredLength="200"/> -->
  <!-- <Button text="Vue" :onClickEvent="onClickEvent" /> -->
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
