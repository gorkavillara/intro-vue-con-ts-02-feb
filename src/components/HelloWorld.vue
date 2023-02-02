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
    <p :class="`failure small ${trueErrorMsg === '' ? 'hidden' : ''}`">
      {{ trueErrorMsg }}
    </p>
    <p :class="`failure small ${errorMsg === '' ? 'hidden' : ''}`">
      {{ errorMsg }}
    </p>
    <p>Valor: {{ valorModel }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from "vue";

const baseError = "ERROR: El texto debe superar los 10 caracteres";

const contador: Ref<number> = ref(0);
const valorInput = ref("Hola Jorge");

const valorModel = ref("Hello Vue");
const errorMsg = ref("");
const trueErrorMsg = computed(() =>
  valorModel.value.length < 10 ? baseError : ""
);

const checkValidation = (event: InputEvent) => {
  // Chequear si el texto es mayor a 10 caracteres
  //@ts-ignore
  const text = event.target.value as string;
  if (text.length < 10) {
    // Si no lo es, populamos el error
    return (errorMsg.value = "ERROR: El texto debe superar los 10 caracteres");
  }
  return (errorMsg.value = "");
};

const handleChange = (event: InputEvent) => {
  console.log(event);
  //@ts-ignore
  valorInput.value = event.target?.value;
};

const incrementa = (e: PointerEvent) => {
  console.log(e);
  contador.value++;
  console.log("Click en incrementa", contador.value);
};
const decrementa = () => {
  contador.value--;
  console.log("Click en decrementa", contador.value);
};
const log = (text: string) => {
  console.log(text);
};

const logEvent = (event: any) => console.log(event);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.success {
  color: green;
}
.failure {
  color: red;
}
.small {
  font-size: 0.75rem;
}
.hidden {
  display: none;
}
.main {
  display: flex;
  flex-direction: column;
}
</style>
