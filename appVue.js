const appVue = Vue.createApp({
    setup() {
        const texto = "Hola mundo desde Vue3"
        
        const tenista = {
            nombre: "Novak",
            ranking: 1
        }

        let contador = 0

        const incrementaContador = () => contador++

        return { texto, tenista, contador, incrementaContador }
    }
})


appVue.mount("#app")