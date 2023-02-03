<script lang="ts" setup>
import { ref, computed } from "vue"

// const status = ref("Activado")
const status = ref(true)

// const cambiaEstado = () => {
//     // Imperativa => Cambia el texto
//     // Imperativa => Cambia la clase

//     // Reactiva => Cambiar el estado
//     // status.value = status.value === "Activado" ? "Desactivado" : "Activado"
//     status.value = !status.value
// }

const cambiaEstado = () => (status.value = !status.value)

const inputValue = ref("Hola mundo")

const cambiaValor = (evento: Event) => {
    const inputText = evento.target?.value
    inputValue.value = inputText
    // Lanzar una llamada a api
    // error.value = inputText.length < 3 ? "Error": ""
}

const inputValue2 = ref("Hello world")
// const error = ref("")
const error = computed(() =>
    inputValue2.value.length < 3 ? "Error menor que 3" : ""
)

const statusText = computed(() => status.value ? "Activado" : "Desactivado")
</script>

<template>
    <button
        v-bind:class="statusText.toLowerCase()"
        @click="cambiaEstado"
    >
        {{ statusText }}
    </button>
    <br />
    <input type="text" :value="inputValue" @change="cambiaValor" />
    <p>Valor: {{ inputValue }}</p>
    <br />
    <input type="text" v-model="inputValue2" />
    <p>Valor: {{ inputValue2 }}</p>
    <p class="error">{{ error }}</p>
</template>

<style scoped>
p.error {
    color: red;
    font-size: 0.5rem;
}
button {
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(100, 100, 100, 0.3);
    font-weight: 600;
    transition: all 0.3s ease-in;
    margin-bottom: 1rem;
}
.activado {
    background-color: aqua;
    color: white;
}
.desactivado {
    background-color: mediumvioletred;
    color: white;
}
</style>
