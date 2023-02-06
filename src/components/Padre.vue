<template>
    <h1>Componente Padre</h1>
    <Hijo :saluda="saluda" @pasoInfo="obtenInfo" />
</template>

<script lang="ts" setup>
    import Hijo from './Hijo.vue';

    const obtenInfo = (...args: any[]) => {
        console.log(JSON.stringify(args))
    }

    const saluda = (texto: string) => {
        console.log(texto)
    }
</script>