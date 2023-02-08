<template>
    <div>
        <div>Users</div>
        <router-link v-for="(user, index) in myUsers" :key="index" :to="`/users/${user}`">
            Usuario {{ user }}
        </router-link>
    </div>
</template>

<script lang="ts" setup>
    const myUsers = [1, 2, 3, 4, 5]
</script>