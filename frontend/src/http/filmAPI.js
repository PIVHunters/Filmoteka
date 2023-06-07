import {$host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchFilms = async (type) => {
    const {data} = await $host.get('api/film')
    return data
}

export const fetchOneFilm = async (id) => {
    const {data} = await $host.get('api/film/' + id)
    return data
}

