import {makeAutoObservable} from "mobx";
import avatar from "../images/Avatar.png"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._data = {
            id: 1, nickname: "INVOIDER", photo: avatar
        }
        this._activity = [40, 16, 9, 4, 8, 2, 21, 16]
        this._favourite = [1, 6, 15, 22, 39, 44, 50, 66]
        this._history = [{
            id: 13,
            look: "Просмотрено, оценено на 10",
            date: "3 дня назад"
        }, {
            id: 24,
            look: "Просмотрено, оценено на 9",
            date: "4 дня назад"
        }, {
            id: 36,
            look: "Брошено, оценено на 5",
            date: "6 дней назад"
        }]
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(data) {
        this._data = data
    }
    setActivity(activity) {
        this._activity = activity
    }
    setHistory(history) {
        this._history = history
    }

    get isAuth() {
        return this._isAuth
    }
    get data() {
        return this._data
    }
    get activity(){
        return this._activity
    }
    get history() {
        return this._history
    }
    get favourite() {
        return this._favourite
    }
}