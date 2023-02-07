import { createApp, DirectiveBinding } from 'vue'
import App from './App.vue'
import { useHttp } from './utils/http'

const app = createApp(App)

app.directive("negrita", (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.modifiers.semibold) {
        return el.style.fontWeight = "600"
    }
    el.style.fontWeight = "800"
})

const { swapiHttp } = useHttp()

app.provide("swapiHttp", swapiHttp)

app.mount('#app')
