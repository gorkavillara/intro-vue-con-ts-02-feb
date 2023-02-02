<template>
  <div>
    <p v-bind:class="textClass">Este es el primer texto</p>
    <p class="failure">Este es el segundo texto</p>
    <a :href="url">Google</a>
    <br/>
    <input type="text" :value="url">
  </div>
</template>

<script lang="ts" setup>
  // Lógica super complicada
  // const textClass = Math.random() > 0.5 ? "success" : "failure"

  // const url = "https://vuejs.org"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .success {
    color: green;
  }
  .failure {
    color: red;
  }
</style>
