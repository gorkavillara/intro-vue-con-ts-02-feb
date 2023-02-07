<template>
  <h3>Autenticación</h3>
  <div class="auth">
    <input type="text" placeholder="Tu email" v-model="userData.email" />
    <input type="password" placeholder="Tu contraseña" v-model="userData.password" />
    <button @click="hazLogin">Log In</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { useAuth } from "@/utils/authComposable";
const { login } = useAuth();

const userData = reactive({
    email: "",
    password: ""
})

const hazLogin = () => {
    login(userData.email, userData.password)
        .then(console.log)
        .catch(console.error)
}

</script>

<style scoped>
div.auth {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
