<template>
    <div>
        <h1>Navegación</h1>
        <button @click="$router.push('/about')">Navega a Sobre</button>
        <button @click="buscaInfo">Busca info</button>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from "vue-router"
    const router = useRouter()

    const buscaInfo = () => {
        // Llamando a una api
        // Obtenemos una info
        const randNumber = Math.random()
        if (randNumber > 0.5) {
            // Ve a contacto
            setTimeout(() => {
                console.log("contacto")
                router.push("/contact")
            }, 500)
        } else {
            // Ve a ajustes
            setTimeout(() => {
                console.log("ajustes")
                router.push("/settings")
            }, 500)
        }
    }
</script>

