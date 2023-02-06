<template>
    <p v-negrita.semibold.otroModificador.otromas.masModificadores v-error>Utilizando Directivas personalizadas</p>
    <input v-focus />
    <p v-color="'green'">Texto de prueba</p>
    <p v-style:fontSize="'2rem'" v-style:fontWeight="'800'">Otro texto de prueba</p>
</template>

<script lang="ts" setup>
    import { DirectiveBinding } from 'vue';

    const vMiDirectiva = {
        mounted: (el: HTMLElement) => {
            console.log("El elemento se ha montado")
            console.log(el)
        }
    }
    const vFocus = {
        mounted: (el: HTMLElement) => {
            el.focus()
        }
    }
    // const vNegrita = {
    //     mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    //         console.log(binding)
    //         if (binding.modifiers.semibold) {
    //             return el.style.fontWeight = "600"
    //         }
    //         el.style.fontWeight = "800"
    //     }
    // }
    const vError = {
        mounted: (el: HTMLElement) => {
            el.style.color = "red"
        }
    }

    const vColor = {
        mounted: (el: HTMLElement, binding: DirectiveBinding) => {
            el.style.color = binding.value
        }
    }

    const vStyle = {
        mounted: (el: HTMLElement, binding: DirectiveBinding) => {
            if (!binding.arg) return
            const arg = binding.arg as any
            el.style[arg] = binding.value
        }
    }
</script>