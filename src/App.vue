<script lang="ts" setup>
import routes from './routes';
const selectedRoutes = routes.filter(
  route => 
    route.name === "Contacto" 
    || route.name === "Usuarios"
    || route.name === "Servicios"
)
// console.log(routes)
</script>

<template>
  <nav class="nav">
    <!-- <a href="/contact">Contacto</a>
    <a href="/about">About Us</a> -->
    <!-- <router-link to="/contact">Contacto</router-link>
    <router-link to="/about">Sobre</router-link>
    <router-link to="/settings">Ajustes</router-link> -->
    <!-- <router-link to="/users">Users</router-link>
    <router-link to="/navigation">Navegación</router-link> -->
    <!-- <router-link :to="{ name: 'Contacto' }">Contacto</router-link> -->
    <router-link v-for="(route, index) in selectedRoutes" :key="index" :to="route.path">
      {{ route.name }}
    </router-link>
    <router-link :to="{ name: 'Info' }">Info</router-link>
  </nav>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <nav class="nav">
    <!-- <a href="/contact">Contacto</a>
    <a href="/about">About Us</a> -->
    <!-- <router-link to="/contact">Contacto</router-link>
    <router-link to="/about">Sobre</router-link>
    <router-link to="/settings">Ajustes</router-link> -->
    <!-- <router-link to="/users">Users</router-link>
    <router-link to="/navigation">Navegación</router-link> -->
    <!-- <router-link :to="{ name: 'Contacto' }">Contacto</router-link> -->
    <router-link v-for="(route, index) in selectedRoutes" :key="index" :to="route.path">
      {{ route.name }}
    </router-link>
    <router-link :to="{ name: 'Contacto', hash: 'formulario', query: { id: 5, nombre: 'Roman' } }">Formulario</router-link>
  </nav>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  /* transform: translateY(-300px); */
  transform: scale(0.9);

}
</style>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
}
nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  background-color: rgb(29, 29, 46);
}
nav a {
  color: rgb(224, 248, 255);
  text-decoration: none;
}

.router-link-active {
  font-weight: 600;
  text-decoration: underline;
}
</style>
