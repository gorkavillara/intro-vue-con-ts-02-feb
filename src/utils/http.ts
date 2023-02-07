import axios from "axios"

export const useHttp = () => {
    const swapiHttp = axios.create({
        baseURL: "https://swapi.dev/api/",
        // maxRedirects: 0,
        // auth: {
        //     username: "gorkavi",
        //     password: "123456789"
        // }
    })

    swapiHttp.interceptors.request.use(config => {
        console.log("Enviando petición", config)
        return config
    })

    swapiHttp.interceptors.response.use(response => {
        console.log("Hemos obtenido la respuesta", response)
        return response
    }, reject => {
        console.error("Se ha recibido un error", reject)
    })

    const rmHttp = axios.create({
        baseURL: "https://rickandmortyapi.com/api/",
        method: "get"
    })

    return { swapiHttp, rmHttp }
}