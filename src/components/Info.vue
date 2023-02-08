<template>
    <div>
        <div>
            Información
        </div>
        <div>{{ $route.query.nombre }}</div>
        <button @click="obtenInfo">Obtén info</button>
        <router-link to="/home">Back</router-link>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()

const obtenInfo = () => {
    console.log(route.query)
}
</script>