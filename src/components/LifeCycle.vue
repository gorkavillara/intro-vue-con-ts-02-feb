<template>
    {{ titulo }}
    <ul v-if="listaClientes && listaClientes.length > 0">
        <li v-for="(cliente, key) in listaClientes" :key="key">
            {{ cliente.nombre }}
        </li>
    </ul>
    <button @click="toggleStatus">{{ toggle ? "on" : "off" }}</button>
</template>

<script lang="ts" setup>
    import { ref, Ref, onMounted, onUpdated, onUnmounted } from 'vue';
    const titulo = "Life Cycle Component"
    const listaClientes: Ref<any[]> = ref([])
    const toggle: Ref<boolean> = ref(false)
    const toggleStatus = () => {
        toggle.value = !toggle.value
    }

    onMounted(() => {
        console.log("El componente ha sido montado")
        // Hagamos un fetch
        // Actualizamos el listado de clientes
        // Modificando la variable reactiva listaClientes
    })

    onUpdated(() => {
        console.log("El DOM se ha actualizado")
    })

    onUnmounted(() => {
        console.log("El componente se ha desmontado")
    })
</script>

<!-- <script lang="ts">
    export default {
        setup() {
            const titulo = "Life Cycle"

            return {
                titulo
            }
        }
    }
</script> -->