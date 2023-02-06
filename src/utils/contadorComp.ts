import { ref } from "vue"

export const useContador = (valorInicial: number = 0) => {
    const contador = ref(valorInicial)

    const incrementa = (incr: number = 1) => {
        contador.value = contador.value + incr
    }

    const decrementa = (decr: number = 1) => {
        contador.value = contador.value - decr
    }

    return { contador, incrementa, decrementa }
}