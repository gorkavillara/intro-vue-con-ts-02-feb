<template>
  <div>
    <p>Nombre</p>
    <input type="text" v-model="formData.nombre" />
    {{ formData.nombre }}
  </div>
  <div>
    <p>Apellidos</p>
    <input type="text" v-model="formData.apellidos" />
    {{ formData.apellidos }}
  </div>
  <div>
    <p>Username</p>
    <input type="text" v-model="formData.username" />
    {{ formData.username }}
  </div>
  <div>
    <p>Password</p>
    <input type="password" v-model="formData.password" />
    {{ formData.password }}
  </div>
</template>

<script lang="ts" setup>
    import { reactive } from "vue"

    const formData = reactive({
        nombre: "",
        apellidos: "",
        username: "nuevousuario",
        password: ""
    })
</script>
