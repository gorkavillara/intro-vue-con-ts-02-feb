<template>
  <div class="main">
  <!-- <h1>Mi contador</h1>
  <p>{{ contador }}</p>
  <button v-on:click="decrementa">-</button>
  <button @click="incrementa">+</button>
  <button @click="log('Hola mundo')">Haz log</button>
  <input type="text" :value="valorInput" @change="handleChange" />
  {{ valorInput }}
  <br/> -->
    <input type="text" v-model="valorModel" />
    {{ valorModel }}
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref } from "vue"
  const contador: Ref<number> = ref(0)
  const valorInput = ref("Hola Jorge")

  const valorModel = ref("Hello Vue")

  const handleChange = (event: InputEvent) => {
    console.log(event)
    //@ts-ignore
    valorInput.value = event.target?.value
  }

  const incrementa = (e: PointerEvent) => {
    console.log(e)
    contador.value++
    console.log("Click en incrementa", contador.value)
  }
  const decrementa = () => {
    contador.value--
    console.log("Click en decrementa", contador.value)
  }
  const log = (text: string) => {
    console.log(text)
  }

  const logEvent = (event: any) => console.log(event)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .success {
    color: green;
  }
  .failure {
    color: red;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
</style>
