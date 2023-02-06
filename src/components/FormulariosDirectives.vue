<template>
    <input v-input-client />
</template>

<script lang="ts" setup>
    import { DirectiveBinding } from 'vue';

    const vMaxLength = {
        mounted(el: HTMLInputElement, binding: DirectiveBinding) {
            el.maxLength = binding.value
        }
    }

    const vInputClient = {
        mounted(el: HTMLInputElement) {
            el.maxLength = 12
            el.required = true
            el.style.color = "blue"
        },
    }
</script>