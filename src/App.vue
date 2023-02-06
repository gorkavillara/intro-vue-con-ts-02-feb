<script lang="ts" setup>
  import { ref } from "vue"
  import LifeCycle from './components/LifeCycle.vue';
  import PokemonLifeCycle from './components/PokemonLifeCycle.vue'
  
  const checkRefs = () => {
    
  }
  const display = ref(true)
  const toggleDisplay = () => {
    display.value = !display.value
  }
</script>

<template>
  <!-- <h1 ref="greeting">Hello</h1> -->
  <!-- <button @click="checkRefs">check Refs</button> -->
  <div v-if="display">
    <PokemonLifeCycle />
  </div>
  <!-- <button @click="toggleDisplay">Display</button> -->
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
