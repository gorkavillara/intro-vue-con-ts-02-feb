<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea.texto }}
    </li>
  </ul>
  <input type="text" v-model="textoNuevaTarea" />
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useTareas } from "@/utils/tareasComposable";

const { tareas, nuevaTarea } = useTareas();

const textoNuevaTarea = ref("")
console.log(tareas);
</script>
