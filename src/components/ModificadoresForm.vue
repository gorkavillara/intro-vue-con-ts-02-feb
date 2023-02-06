<template>
    <form>
        <input type="text" v-model.trim="formData.email" />
        {{ formData.email }}
        <input type="text" v-model.lazy="formData.nombre" />
        {{ formData.nombre }}
        <input type="text" v-model.number="formData.edad" />
        {{ formData.edad }}
        <br/>
        <button type="submit">Enviar</button>
    </form>
    <button @click="logData">Log</button>
</template>

<script lang="ts" setup>
    import { reactive } from "vue"

    const formData = reactive({
        email: "",
        nombre: "",
        edad: 0
    })

    const logData = () => {
        console.log("email", formData.email.length)
        console.log("nombre", formData.nombre)
        console.log("edad", formData.edad)
    }
</script>