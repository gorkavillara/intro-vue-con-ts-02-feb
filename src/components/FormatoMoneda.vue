<template>
    <p>El precio de este artículo es: <span v-euro="precio"></span></p>
    <button v-drag-n-drop="precio" @click="cambiaPrecio">Incrementa precio</button>
</template>

<script lang="ts" setup>
    import { DirectiveBinding, ref } from "vue"

    const precio = ref(18)

    const vEuro = {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            // console.log(el.innerText)
            el.innerText = `${Number(binding.value).toFixed(2)} €`
        },
        updated(el: HTMLElement, binding: DirectiveBinding) {
            // console.log(el.innerText)
            el.innerText = `${Number(binding.value).toFixed(2)} €`
        },
    }

    const vDragNDrop = {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            el.setAttribute("draggable", "true")
            el.addEventListener("dragstart", (event: DragEvent) => {
                event.dataTransfer?.setData("text/plain", binding.value)
            })
            el.addEventListener("dragend", (event: DragEvent) => {
                console.log(`He finalizado el drag, y la información debería ser ${binding.value}`)
            })
        }
    }

    const cambiaPrecio = () => {
        precio.value = precio.value + 0.09
    }
</script>