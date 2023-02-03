<template>
    <input type="number" v-model="setNumber" />
    <Button text="Set" @click="setEvent(setNumber)" />
    <!-- <Button text="Set" @click="emitNewEvent("setContador", setNumber)" /> -->
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    import Button from "./Button.vue"

    defineProps<{ setEvent: (num: number) => number }>()

    const setNumber = ref(0)

    // const emitNewEvent = (eventName: string, data?: any) => {

    // }

</script>
