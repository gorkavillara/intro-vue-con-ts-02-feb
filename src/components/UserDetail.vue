<template>
    <div>
        <h3>Usuario {{ $route.params.userId }}</h3>
    </div>
    <div class="subroutes">
        <div class="sidebar">
            <router-link to="scores">Notas</router-link>
            <router-link to="info">Información</router-link>
            <router-link to="courses">Cursos</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>

    <!-- <button @click="muestraInfo">Muestra Info</button> -->
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
// const muestraInfo = () => {
//     console.log(route.params.userId)
// }
</script>

<style scoped>
    div.subroutes {
        display: flex;
        width: 100%;
    }

    div.sidebar {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        padding: 0 0.5rem;
        box-sizing: border-box;
    }
</style>