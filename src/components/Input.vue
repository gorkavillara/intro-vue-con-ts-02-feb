<template>
    <input type="text" name="input" id="input" v-model="value" />
    <p :class="`${error === '' ? 'hidden' : ''}`">{{ error }}</p>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
const value = ref("")
const error = computed(() =>
    value.value.length < 5 ? "El input debe ser mayor a 5 caracteres" : ""
)
</script>

<style scoped>
    input {
        border: none;
        box-shadow: 0 0 10px #666666aa;
        outline: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
    }
    p {
        color: red;
        font-size: 0.6rem;
    }

    p.hidden {
        display: none;
    }
</style>
