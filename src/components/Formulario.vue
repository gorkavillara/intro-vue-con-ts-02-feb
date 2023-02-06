<template>
  <!-- <input type="text" :value="textValue" @input="handleChange" /> -->
  <input type="text" v-model="textValue" @input="inputChange" />
  <p>{{ textValue }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const textValue = ref("Hello world");
const handleChange = (event: Event & { target: { value: string } }) => {
//   console.log("El input ha cambiado");
//   console.log(event.target?.value);
    textValue.value = event.target?.value
};

const inputChange = (event: Event) => {
    console.log(event)
}
</script>
