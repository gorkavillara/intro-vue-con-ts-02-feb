<template>
    <h3>SW Api</h3>
    <div>
        <!-- <input type="number" v-model.number="id" min="1" max="200" /> -->
        <input type="text" v-model="id" />
        <button @click="fetchCharacter">Obtén personaje</button>
    </div>
    <!-- <div v-if="selectedCharacter.nombre !== ''">
        <h4>{{ selectedCharacter.id }} - {{ selectedCharacter.nombre }} - {{ selectedCharacter.especie }}</h4>
        <img :src="selectedCharacter.imagen" :alt="selectedCharacter.nombre" />
    </div> -->
</template>

<script lang="ts" setup>
    import { ref, inject } from "vue"
    const id = ref(1)

    const swapiHttp = inject("swapiHttp")

    const fetchCharacter = async() => {
        //@ts-ignore
        const res = await swapiHttp.get(`people/${id.value}`)
        console.log(res.data)
    }
</script>