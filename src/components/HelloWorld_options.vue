<template>
  <h1>Hola mundo desde Vue3</h1>
  <h3>Haremos un ejemplo con Options API</h3>
  <p>{{ contador }}</p>
  <button v-on:click="increment">+</button>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        contador: 1
      }
    },
    methods: {
      increment() {
        this.contador++
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
