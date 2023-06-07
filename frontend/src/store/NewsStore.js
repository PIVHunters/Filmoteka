import {makeAutoObservable} from "mobx";
import img1 from "../images/news/1.jpg"
import img2 from "../images/news/2.jpg"
import img3 from "../images/news/3.jpg"
import img4 from "../images/news/4.jpg"
import img5 from "../images/news/5.jpg"
import img6 from "../images/news/6.jpg"

export default class NewsStore {
    constructor() {
        this._data = [
            {   news_id: 1,
                name: "Амбициозный и очень дорогой шлем Vision Pro, MacBook Air 15 и iOS 17. Что Apple показала на открытии WWDC 2023",
                poster: img1,
                date: "1 день назад"
            },
            {   news_id: 2,
                name: "Что происходит с «Русалочкой»: фильм может не окупиться, хотя хорошо стартовал в США, а агрегаторы оценок пытаются менять из-за него свои правила",
                poster: img2,
                date: "1 день назад"
            },
            {   news_id: 3,
                name: "Вопрос: как повторить образы с красных дорожек Каннского фестиваля? Ответ: как звезда!",
                poster: img3,
                date: "2 дня назад"},
            {   news_id: 4,
                name: "«Три мушкетера: Д’Артаньян». Зачем нужна и чем хороша еще одна экранизация Дюма",
                poster: img4,
                date: "2 дня назад"},
            {   news_id: 5,
                name: "Что оставил после себя Тед Лассо. Редакция делится впечатлениями от трех сезонов и прощается с сериалом",
                poster: img5,
                date: "2 дня назад"},
            {   news_id: 6,
                name: "«Экслибриум» — комикс в духе «Гарри Поттера». Но про гиков и литературу!",
                poster: img6,
                date: "2 дня назад"},
        ]

        makeAutoObservable(this)
    }

    setData(data) {
        this._data = data
    }

    get data() {
        return this._data
    }

}