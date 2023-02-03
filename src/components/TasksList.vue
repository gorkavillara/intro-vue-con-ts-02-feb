<script lang="ts" setup>
import { ref, reactive } from "vue"

interface Task {
    title: string
    description?: string
    done: boolean
}

const myTasks: Task[] = [
    // {
    //     title: "Sacar la basura",
    //     done: false,
    // },
    // {
    //     title: "Lavar la ropa",
    //     done: false,
    // },
]

const state = reactive({
    myTasks,
})

const currentTask = ref("")

const addCurrentTaskToMyTasks = () => {
    if (currentTask.value === "") return

    state.myTasks.push({ title: currentTask.value, done: false })
    currentTask.value = ""
    // if (currentTask.value !== "") {
    //     state.myTasks.push({ title: currentTask.value, done: false })
    //     currentTask.value = ""
    // }
}

const checkSend = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return
    addCurrentTaskToMyTasks()
}

const changeState = (index: number) => {
    console.log("Changing state")
    state.myTasks[index] = {
        ...state.myTasks[index],
        done: !state.myTasks[index].done,
    }
    console.log(state.myTasks)
}
</script>
<template>
    <div id="insertForm">
        <input type="text" v-model="currentTask" @keydown="checkSend" />
        <button @click="addCurrentTaskToMyTasks">Add</button>
    </div>
    <!-- <div>
        <p v-for="n in 25" :key="n">
            {{ n }}
        </p>
    </div> -->
    <div id="lastTask" v-if="state.myTasks.length > 0">
        <p
            v-for="(value, key, index) in state.myTasks[
                state.myTasks.length - 1
            ]"
            :key="index"
        >
            {{ key }}: {{ value }}
        </p>
    </div>
    <div id="tasklist">
        <template v-for="(task, index) in state.myTasks" :key="index">
            <div
                v-if="!task.done"
                id="task"
                :class="task.done ? 'done' : ''"
                @mouseenter="changeState(index)"
            >
                <!-- <p>{{ task.title }}</p> -->
                <p v-for="(value, key, objIndex) in task" :key="objIndex">
                    {{ value }}
                </p>
            </div>
        </template>
    </div>
</template>
<style scoped>
div#insertForm {
    display: flex;
    gap: 1rem;
}
div#tasklist {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
    padding-top: 1rem;
}
div#task {
    background-color: rgb(255, 255, 137);
    border-radius: 0.2rem;
    box-shadow: 0 0.25rem 0.25rem #33333333;
}
div#task.done {
    opacity: 50%;
    text-decoration: line-through;
}
div#lastTask {
    display: flex;
    gap: 1rem;
}
</style>
