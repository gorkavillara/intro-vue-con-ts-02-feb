<template>
  <div v-if="loading">
    <Loader />
    <p>Cargando...</p>
  </div>
  <ul v-if="!loading && pokeList && pokeList.length > 0">
    <li class="pokeCard" v-for="(pokemon, index) in pokeList" :key="index">
      <span class="id">{{ pokemon.id }}</span>
      <span class="name">{{ pokemon.name }}</span>
      <span class="image">{{ pokemon.sprite }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import axios, { AxiosResponse } from "axios";
import { Pokemon, PokeResponse } from "../models"
import Loader from "./Loader.vue";

const pokeList: Ref<Pokemon[]> = ref([]);
const loading: Ref<boolean> = ref(false);

onMounted(() => {
  console.log("Acabo de ser montado");
  // 1 - Vamos a poner un loading
  loading.value = true;
  // 2 - Vamos a hacer la búsqueda
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  // 3 - Vamos a popular los datos modificando pokeList
  axios
    .get(url)
    .then((r: AxiosResponse<PokeResponse, any>) => {
      const lista: Pokemon[] = r.data.results.map((result, index) => ({
        id: index + 1,
        name: result.name,
      }));
      pokeList.value = lista
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<style scoped>
ul {
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
li {
  list-style: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(150, 150, 150, 0.5);
}
li.pokeCard {
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
li.image {
  width: 50px;
}
</style>
