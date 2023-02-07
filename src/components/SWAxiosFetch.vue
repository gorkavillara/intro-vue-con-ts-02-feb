<template>
    <h3>SW Api</h3>
    <div>
        <input type="number" v-model.number="id" min="1" max="200" />
        <button @click="fetchCharacter">Obtén personaje</button>
    </div>
    <!-- <div v-if="selectedCharacter.nombre !== ''">
        <h4>{{ selectedCharacter.id }} - {{ selectedCharacter.nombre }} - {{ selectedCharacter.especie }}</h4>
        <img :src="selectedCharacter.imagen" :alt="selectedCharacter.nombre" />
    </div> -->
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    import axios from "axios"

    axios.defaults.baseURL = "https://swapi.dev/api/"
    // axios.defaults.method = "post"

    const id = ref(1)

    const fetchCharacter = async() => {
        const res = await axios.get(`people/${id.value}`)
        console.log(res.data)
    }
</script>