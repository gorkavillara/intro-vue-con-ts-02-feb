<template>
    <form>
        <textarea v-model="nuestroTexto"></textarea>
        <p style="white-space: pre-line">{{ nuestroTexto }}</p>
    </form>
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    const nuestroTexto = ref("")
</script>