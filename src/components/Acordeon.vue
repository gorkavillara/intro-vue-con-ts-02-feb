<script lang="ts" setup>
import { ref } from "vue"

const collapsed = ref(false)
const toggleCollapse = () => (collapsed.value = !collapsed.value)
</script>
<template>
    <div class="container">
        <div class="post">
            <div class="toggler" @click="toggleCollapse">
                <span
                    :class="`caret ${collapsed ? 'collapsed' : 'notcollapsed'}`"
                    >{{ ">" }}</span
                >
            </div>
            <div v-if="!collapsed" class="content">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, saepe earum! Officiis reprehenderit incidunt quia!
                </p>
            </div>
            <div v-show="!collapsed" class="content">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, saepe earum! Officiis reprehenderit incidunt quia!
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
div.container {
    border: solid 2px rgb(150, 150, 150);
}

span.caret {
    transition: all 0.3s;
}
span.collapsed {
    transform: rotate(90deg);
}

span.notcollapsed {
    transform: rotate(-90deg);
}

div.toggler {
    width: 100%;
    height: 2rem;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hidden {
    display: none;
}
</style>
