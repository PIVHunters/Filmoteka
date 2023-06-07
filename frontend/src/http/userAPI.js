import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (nickname, password,email) => {
    const {data} =await $host.post('api/user/reg',{nickname,password,email})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (nickname, password) => {
    const {data} =await $host.post('api/user/login',{nickname,password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    try{
        const {data} =await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }catch (e){
        console.log("Нет подключения к серверу")
    }
}