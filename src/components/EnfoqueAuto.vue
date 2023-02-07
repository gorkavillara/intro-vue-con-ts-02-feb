<template>
    <h3>Enfoque auto</h3>
    <input type="text" v-focus />
</template>

<script lang="ts" setup>
    const vFocus = {
        mounted(el: HTMLInputElement) {
            el.focus()
        }
    }
</script>