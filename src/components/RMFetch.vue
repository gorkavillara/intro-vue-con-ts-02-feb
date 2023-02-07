<template>
    <div>
        <input type="number" v-model.number="id" min="1" max="200" />
        <button @click="fetchCharacter">Obtén personaje</button>
    </div>
    <div v-if="selectedCharacter.nombre !== ''">
        <h4>{{ selectedCharacter.id }} - {{ selectedCharacter.nombre }} - {{ selectedCharacter.especie }}</h4>
        <img :src="selectedCharacter.imagen" :alt="selectedCharacter.nombre" />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    const url = "https://rickandmortyapi.com/api/character/"
    const id = ref(1)

    const selectedCharacter = ref({
        id: 0,
        nombre: "",
        especie: "",
        imagen: ""
    })

    const fetchCharacter = () => {
        fetch(`${url}${id.value}`)
            .then(res => res.json())
            .then(info => {
                selectedCharacter.value = {
                    id: info.id,
                    nombre: info.name,
                    especie: info.species,
                    imagen: info.image
                }
            })
    }
</script>