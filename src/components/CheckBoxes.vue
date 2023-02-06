<template>
  <form>
    <label>
      <input type="checkbox" value="type-r" v-model="selectedCars" />
      <span>Type-R</span>
    </label>
    <label>
      <input
        type="checkbox"
        value="multipla"
        v-model="selectedCars"
      />
      <span>Multipla</span>
    </label>
    <label>
      <input type="checkbox" value="verso" v-model="selectedCars" />
      <span>Verso</span>
    </label>
  </form>
  {{ selectedCars }}
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedCars = ref([]);
</script>
