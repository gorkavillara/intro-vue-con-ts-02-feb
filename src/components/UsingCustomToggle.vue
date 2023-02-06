<template>
    <form>
        ¿Cuál es tu nombre?
        <input type="text" />
        <p>¿Eres desarrollador?</p>
        <CustomToggle v-model="isDeveloper" />
    </form>
    {{ isDeveloper }}
</template>

<script setup lang="ts">
    import { ref } from "vue"
    import CustomToggle from './CustomToggle.vue';
    const isDeveloper = ref(false)
</script>