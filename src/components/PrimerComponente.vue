<!-- <script lang="ts">
    export default {
        setup() {
            const saludo = "Bienvenid@s"

            return {
                saludo
            }
        }
    }
</script> -->

<script lang="ts" setup>
    import { ref, reactive } from "vue"
    class Personaje {
        nombre: string
        serie: string
        constructor(n: string, s: string) {
            this.nombre = n
            this.serie = s
        }
    }
    const miPersonaje = new Personaje("Steve Urkel", "Cosas de casa")

    const saludo = "Bienvenid@s"
    // Esto hace que el valor de contador esté vinculado a la vista
    const contador = ref(0)

    const incrementaContador = (num: number, event?: any) => {
        // console.log(event)
        contador.value += num
        console.log(contador)
    }

    const handleClick = (param?: any) => {
        console.log("parámetro", param)
        // console.log("He hecho clic")
    }

    const estado = reactive({
        personaje: miPersonaje,
        contador: 0,
        modoOscuro: false
    })
    const cambiaPersonaje = () => {
        const nuevoPersonaje = new Personaje("Michael Scott", "The Office")
        estado.personaje = nuevoPersonaje
    }
</script>

<template>
    <h2>Este es mi primer componente</h2>
    <p>{{ saludo }}</p>
    <p>Valor: {{ contador }}</p>
    <button v-on:click="incrementaContador(2)">Suma 2</button>
    <button v-on:click="(event) => incrementaContador(3, event)">Suma 3</button>
    <br/>
    <button @click="handleClick">Haz clic</button>
    <button @click="handleClick()">Haz clic 2</button>
    <br/>
    <p>Mi personaje favorito es {{ estado.personaje.nombre }} de la serie {{ estado.personaje.serie }}</p>
    <button @click="cambiaPersonaje">Cambia personaje</button>
</template>

<style></style>