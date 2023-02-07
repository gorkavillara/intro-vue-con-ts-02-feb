<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      <span
        :style="`text-decoration: ${tarea.completado ? 'line-through' : ''}`"
        >{{ tarea.texto }}</span
      >
      <button @click="() => completaTarea(index)">Completar</button>
      <button @click="() => eliminaTarea(tarea.texto)">Eliminar</button>
    </li>
  </ul>
  <input type="text" v-model="textoNuevaTarea" placeholder="Nueva tarea" />
  <button @click="addNuevaTarea">Añadir tarea</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTareas } from "@/utils/tareasComposable";

const { tareas, nuevaTarea, completaTarea, eliminaTarea } = useTareas();

const addNuevaTarea = () => {
  if (textoNuevaTarea.value === "") return;
  nuevaTarea(textoNuevaTarea.value, "Pablo");
  textoNuevaTarea.value = "";
};

const textoNuevaTarea = ref("");
</script>
