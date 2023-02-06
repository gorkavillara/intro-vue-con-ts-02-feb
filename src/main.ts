import { createApp, DirectiveBinding } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive("negrita", (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.modifiers.semibold) {
        return el.style.fontWeight = "600"
    }
    el.style.fontWeight = "800"
})

app.mount('#app')
