<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <p>Nombre</p>
      <input type="text" v-model="formData.nombre" />
    </div>
    <div>
      <p>Apellidos</p>
      <input type="text" v-model="formData.apellidos" />
    </div>
    <div>
      <p>Username</p>
      <input type="text" v-model="formData.username" />
    </div>
    <div>
      <p>Password</p>
      <input type="password" v-model="formData.password" />
    </div>
    <button type="submit">Enviar</button>
    <button type="reset">Reset</button>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const formData = reactive({
  nombre: "",
  apellidos: "",
  username: "nuevousuario",
  password: "",
});

const handleSubmit = (event: SubmitEvent) => {
  // event.preventDefault()
  console.log(formData)
}
</script>
