import {makeAutoObservable} from "mobx";
import img1 from "../images/posters/1.jpg"
import img2 from "../images/posters/2.jpg"
import img3 from "../images/posters/3.jpg"
import img4 from "../images/posters/4.jpg"
import img5 from "../images/posters/5.jpg"
import img6 from "../images/posters/6.jpg"
import img7 from "../images/posters/7.jpg"
import img8 from "../images/posters/8.jpg"
import img9 from "../images/posters/9.jpg"
import img10 from "../images/posters/10.jpg"
import img11 from "../images/posters/11.jpg"
import img12 from "../images/posters/12.jpg"
import img13 from "../images/posters/13.jpg"
import img14 from "../images/posters/14.jpg"
import img15 from "../images/posters/15.jpg"
import img16 from "../images/posters/16.jpg"
import img17 from "../images/posters/17.jpg"
import img18 from "../images/posters/18.jpg"
import img19 from "../images/posters/19.jpg"
import img20 from "../images/posters/20.jpg"
import img21 from "../images/posters/21.jpg"
import img22 from "../images/posters/22.jpg"
import img23 from "../images/posters/23.jpg"
import img24 from "../images/posters/24.jpg"
import img25 from "../images/posters/25.jpg"
import img26 from "../images/posters/26.jpg"
import img27 from "../images/posters/27.jpg"
import img28 from "../images/posters/28.jpg"
import img29 from "../images/posters/29.jpg"
import img30 from "../images/posters/30.jpg"
import img31 from "../images/posters/31.jpg"
import img32 from "../images/posters/32.jpg"
import img33 from "../images/posters/33.jpg"
import img34 from "../images/posters/34.jpg"
import img35 from "../images/posters/35.jpg"
import img36 from "../images/posters/36.jpg"
import img37 from "../images/posters/37.jpg"
import img38 from "../images/posters/38.jpg"
import img39 from "../images/posters/39.jpg"
import img40 from "../images/posters/40.jpg"
import img41 from "../images/posters/41.jpg"
import img42 from "../images/posters/42.jpg"
import img43 from "../images/posters/43.jpg"
import img44 from "../images/posters/44.jpg"
import img45 from "../images/posters/45.jpg"
import img46 from "../images/posters/46.jpg"
import img47 from "../images/posters/47.jpg"
import img48 from "../images/posters/48.jpg"
import img49 from "../images/posters/49.jpg"
import img50 from "../images/posters/50.jpg"
import img51 from "../images/posters/51.jpg"
import img52 from "../images/posters/52.jpg"
import img53 from "../images/posters/53.jpg"
import img54 from "../images/posters/54.jpg"
import img55 from "../images/posters/55.jpg"
import img56 from "../images/posters/56.jpg"
import img57 from "../images/posters/57.jpg"
import img58 from "../images/posters/58.jpg"
import img59 from "../images/posters/59.jpg"
import img60 from "../images/posters/60.jpg"
import img61 from "../images/posters/61.jpg"
import img62 from "../images/posters/62.jpg"
import img63 from "../images/posters/63.jpg"
import img64 from "../images/posters/64.jpg"



export default class FIlmStore {
    constructor() {
        this._types = [
            {id: 1, type_name: "Фильм"},
            {id: 2, type_name: "Сериал"}
        ]
        this._films = [
            {   film_id: 1,
                type_id: 1,
                name: "Зеленая миля",
                kp_rating: 9.1,
                seasons_number: "",
                imdb_rating: 8.3,
                imdb_votes: 233,
                kp_votes: 222,
                description: "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
                kp_id: 2,
                duration: "03:09",
                release_year: 1999,
                budget: 100000,
                distributor: "West",
                user_mark: "",
                short_desc: "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга",
                start_series: "",
                end_series: "",
                poster: img1},
            {film_id: 2,
                type_id: 1,
                name: "Побег из Шоушенка",
                kp_rating: 8.1,
                seasons_number: 3,
                imdb_rating: 2.3,
                imdb_votes: 2233,
                kp_votes: 2232,
                description: "ijfiadsjnfiasCSDAASSDSdsfd sadasdujn",
                kp_id: 11,
                duration: "01:11:00",
                release_year: 2005,
                budget: 120020,
                distributor: "Другоекино",
                user_mark: "",
                short_desc: "saokjdfosaoips asf pofsikpop awdwdawsdaw",
                start_series: 1777,
                end_series: 2222,
                poster: img2},
            {film_id: 3,
                type_id: 1,
                name: "Форрест Гамп",
                kp_rating: 9.9,
                seasons_number: 1,
                imdb_rating: 9.9,
                imdb_votes: 10000,
                kp_votes: 20000,
                description: "Очень круто",
                kp_id: 4,
                duration: "03:33:00",
                release_year: 2002,
                budget: 400,
                distributor: "Совсемдругоекино",
                user_mark: 10,
                short_desc: "Жизнь...",
                start_series: "",
                end_series: "",
                poster: img3
            },
            {
                film_id: 4,
                type_id: 1,
                name: "Список Шиндлера",
                poster: img4
            },
            {
                film_id: 5,
                type_id: 1,
                name: "Тайна Коко",
                poster: img5
            },
            {
                film_id: 6,
                type_id: 1,
                name: "Властелин колец: Возвращение короля",
                poster: img6
            },
            {
                film_id: 7,
                type_id: 1,
                name: "Интерстеллар",
                poster: img7
            },
            {
                film_id: 8,
                type_id: 1,
                name: "Бойцовский клуб",
                poster: img8
            },
            {
                film_id: 9,
                type_id: 1,
                name: "Криминальное чтиво",
                poster: img9
            },
            {
                film_id: 10,
                type_id: 1,
                name: "Унесённые призраками",
                poster: img10
            },
            {
                film_id: 11,
                type_id: 1,
                name: "Властелин колец: Братство Кольца",
                poster: img11
            },
            {
                film_id: 12,
                type_id: 1,
                name: "Иван Васильевич меняет профессию",
                poster: img12
            },
            {
                film_id: 13,
                type_id: 1,
                name: "Властелин колец: Две крепости",
                poster: img13
            },
            {
                film_id: 14,
                type_id: 1,
                name: "Назад в будущее",
                poster: img14
            },
            {
                film_id: 15,
                type_id: 1,
                name: "Король Лев",
                poster: img15
            },
            {
                film_id: 16,
                type_id: 1,
                name: "1+1",
                poster: img16
            },
            {
                film_id: 17,
                type_id: 1,
                name: "Приключения Шерлока Холмса и доктора Ватсона: Собака Баскервилей",
                poster: img17
            },
            {
                film_id: 18,
                type_id: 1,
                name: "Шрэк",
                poster: img18
            },
            {
                film_id: 19,
                type_id: 1,
                name: "Москва слезам не верит",
                poster: img19
            },
            {
                film_id: 20,
                type_id: 1,
                name: "Достучаться до небес",
                poster: img20
            },
            {
                film_id: 21,
                type_id: 1,
                name: "ВАЛЛ·И",
                poster: img21
            },
            {
                film_id: 22,
                type_id: 1,
                name: "Шерлок Холмс и доктор Ватсон: Знакомство",
                poster: img22
            },
            {
                film_id: 23,
                type_id: 1,
                name: "Джентльмены удачи",
                poster: img23
            },
            {
                film_id: 24,
                type_id: 1,
                name: "Остров проклятых",
                poster: img24
            },
            {
                film_id: 25,
                type_id: 1,
                name: "Гарри Поттер и узник Азкабана",
                poster: img25
            },

            {
                film_id: 26,
                type_id: 2,
                name: "Во все тяжкие",
                poster: img26
            },{
                film_id: 27,
                type_id: 2,
                name: "Офис",
                poster: img27
            },{
                film_id: 28,
                type_id: 2,
                name: "Игра престолов",
                poster: img28
            },{
                film_id: 29,
                type_id: 2,
                name: "Семнадцать мгновений весны",
                poster: img29
            },{
                film_id: 30,
                type_id: 2,
                name: "Сопрано",
                poster: img30
            },{
                film_id: 31,
                type_id: 2,
                name: "Аватар: Легенда об Аанге",
                poster: img31
            },{
                film_id: 32,
                type_id: 2,
                name: "Друзья",
                poster: img32
            },{
                film_id: 33,
                type_id: 2,
                name: "Аббатство Даунтон",
                poster: img33
            },{
                film_id: 34,
                type_id: 2,
                name: "Атака титанов",
                poster: img34
            },{
                film_id: 35,
                type_id: 2,
                name: "Амфибия",
                poster: img35
            },{
                film_id: 36,
                type_id: 2,
                name: "Как я встретил вашу маму",
                poster: img36
            },{
                film_id: 37,
                type_id: 2,
                name: "Лучше звоните Солу",
                poster: img37
            },{
                film_id: 38,
                type_id: 2,
                name: "Йеллоустоун",
                poster: img38
            },{
                film_id: 39,
                type_id: 2,
                name: "Шерлок",
                poster: img39
            },{
                film_id: 40,
                type_id: 2,
                name: "Рик и Морти",
                poster: img40
            },{
                film_id: 41,
                type_id: 2,
                name: "Клиника",
                poster: img41
            },{
                film_id: 42,
                type_id: 2,
                name: "Приключения Пети и Волка",
                poster: img42
            },{
                film_id: 43,
                type_id: 2,
                name: "Гравити Фолз",
                poster: img43
            },{
                film_id: 44,
                type_id: 2,
                name: "Доктор Хаус",
                poster: img44
            },{
                film_id: 45,
                type_id: 2,
                name: "Американская семейка",
                poster: img45
            },{
                film_id: 46,
                type_id: 2,
                name: "Вернуться в 1988",
                poster: img46
            },{
                film_id: 47,
                type_id: 2,
                name: "Путешествие к бессмертию",
                poster: img47
            },{
                film_id: 48,
                type_id: 2,
                name: "Ликвидация",
                poster: img48
            },{
                film_id: 49,
                type_id: 2,
                name: "Место встречи изменить нельзя",
                poster: img49
            },{
                film_id: 50,
                type_id: 2,
                name: "Крутой учитель Онидзука",
                poster: img50
            },























        ]
        this._comingOutFilms = [
            {
                film_id: 51,
                type_id: 1,
                name: "Три мушкетера: Д’Артаньян",
                poster: img51
            },
            {
                film_id: 52,
                type_id: 1,
                name: "Кунг-фу жеребец",
                poster: img52
            },
            {
                film_id: 53,
                type_id: 1,
                name: "Мизантроп",
                poster: img53
            },
            {
                film_id: 54,
                type_id: 1,
                name: "Возрожденные",
                poster: img54
            },
            {
                film_id: 55,
                type_id: 1,
                name: "Заклятье. Первое пробуждение",
                poster: img55
            },
            {
                film_id: 56,
                type_id: 1,
                name: "Пленница любви",
                poster: img56
            },
            {
                film_id: 57,
                type_id: 1,
                name: "Тихий садовник",
                poster: img57
            },
        ]
        this._comingOutSerials = [
            {
                film_id: 58,
                type_id: 2,
                name: "Барри",
                poster: img58
            },
            {
                film_id: 59,
                type_id: 2,
                name: "Импровизаторы",
                poster: img59
            },
            {
                film_id: 60,
                type_id: 2,
                name: "Наследники",
                poster: img60
            },
            {
                film_id: 61,
                type_id: 2,
                name: "Трейдер",
                poster: img61
            },
            {
                film_id: 62,
                type_id: 2,
                name: "Юность",
                poster: img62
            },
            {
                film_id: 63,
                type_id: 2,
                name: "The Ultimate Fighter",
                poster: img63
            },
            {
                film_id: 64,
                type_id: 2,
                name: "За нас с вами",
                poster: img64
            },
        ]
        this._selectedType = ""
        this._selectedFilm = {}
        makeAutoObservable(this)
    }

    setFilms(films) {
        this._films = films
    }
    setTypes(types) {
        this._types = types
    }
    setSelectedFilm(selectedFilm) {
        this._selectedFilm = selectedFilm
    }
    setSelectedType(selectedType) {
        this._selectedType = selectedType
    }
    setComingOutFilms(comingOutFilms) {
        this._comingOutFilms = comingOutFilms
    }
    setComingOutSerials(comingOutSerials) {
        this._comingOutSerials = comingOutSerials
    }

    get films() {
        return this._films
    }
    get types() {
        return this._types
    }
    get selectedFilm() {
        return this._selectedFilm
    }
    get selectedType() {
        return this._selectedType
    }
    get comingOutFilms() {
        return this._comingOutFilms
    }
    get comingOutSerials() {
        return this._comingOutSerials
    }
}