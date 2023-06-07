import {makeAutoObservable} from "mobx";
import avatar from "../images/Avatar.png"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._data = {
            id: 1, nickname: "L.O.B.A.N.O.V", photo: avatar
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(data) {
        this._data = data
    }

    get isAuth() {
        return this._isAuth
    }
    get data() {
        return this._data
    }
}