<template>
  <p>Componente hijo</p>
  <button @click="pasaInfo">Log Padre</button>
  <button @click="emitInfo">Emite Padre</button>
</template>

<script lang="ts" setup>
const { saluda } = defineProps<{ saluda?: (texto: string) => void }>();
const emit = defineEmits(["pasoInfo"])

const emitInfo = () => {
    emit("pasoInfo", "Kaixo emitido desde hijo")
}

const pasaInfo = () => {
    if (!saluda) return
    saluda("Kaixo aita")
};
</script>
