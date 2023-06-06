const db = require('./db.js') // Подключаем модуль бд
const fs = require("fs");
const {pool} = require("./db");
require('dotenv').config() //Подключаем библиотеку переменных окружения

const API_URL = process.env.API_URL

/**
 * Данная функция парсит нужные данные с Кинопоиска
 * @async
 * @function
 * @returns {Object} возвращает объект в JSON формате
 */
async function getMovies(){ //Функция, которая парсит все фильмы из кинопоиска
    console.log("API URL IS: ",API_URL)
    const resp = await fetch(API_URL,{
        headers:{
            "Content-Type": "application/json",
            "X-API-KEY": process.env.API_KEY,
        },
    });
    const resData = await resp.json();
    //console.log(resData);
    return await resData
}

/**
 * Данная функция добавляет загруженные данные с сайта Кинопоиска и сохраняет их в бд приложения
 * @async
 * @function
 * @returns {Promise<void>} ничего
 */
async function parseToDB() { //Функция добавления информации в бд
    /*
    let data = await getMovies();

      fs.writeFile ("input.json", JSON.stringify(data), function(err) {
           if (err) throw err;
              console.log('complete');
       }
      );
*/
    let data = fs.readFileSync("input.json", "utf8");
    data = JSON.parse(data);
    data = data.docs;
    // console.log( data);
//debug
    let i = 1
    data.forEach((movie) => {

        console.log(movie.name)
        console.log(movie.movieLength)
        console.log("type: ", movie.type)
        console.log("typeNumber:", movie.typeNumber)
        console.log(movie.rating)
        console.log("Year ", movie.year)
        console.log("votesKP: ", movie.votes.kp)
        console.log("desc: ", movie.description)
        console.log("sDesc: ", movie.shortDescription)
        try {
            console.log("season^ ", movie.seasonsInfo.number)
        } catch (e) {
            console.log("XD")
        }
        console.log("movie.countries: ", movie.countries)
        console.log("_____________________________________")


        //console.log("Проверка: ",movie.budget.value)
        console.log("____________")
        let temp = [i, Number(typeSelector(movie.type)),  Number(movie.rating.kp), String(movie.name),  Number(movie.movieLength),  Number(movie.year), Number( movie.budget?.value ? movie.budget.value : 1), "Режиссёр", 1,  Number(movie.seasonsInfo?.number ? movie.seasonsInfo?.number : 1),  Number(movie.rating.imdb),  Number(movie.votes.imdb),  Number(movie.votes.kp), movie.description,  Number(movie.id), movie.poster.url, movie.shortDescription,  Number(movie.releaseYears?.start ? movie.releaseYears?.start : 1),  Number(movie.releaseYears?.end ? movie.releaseYears?.end : 1)]


        // console.log("Вы пытаетесь ввести: ",  " Колличество символов: ", temp.length,"\n")
        // for (let m in temp){
        //     console.log(temp[m]," типа: ",typeof temp[m],"\n")
        // }
        pool.query('INSERT INTO public.films VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)', temp)

        console.log('Ввод: \n')


        console.log('\nКонец ввода\n\n')
        console.log("*________________________________________*")
        i += 1;
    });


    let films = await pool.query('SELECT * FROM public.films', (err, res) => {
        console.log(res.rows)
    })
    console.log(films)

}

/**
 * Данная функция вставляет данные в бд
 * @param array массив данных для вставки
 * @returns {Promise<void>}
 */

/**
 * Функция перевода строкового типа фильмов в цифровой формат
 * @param type {string} Тип фильма в виде строки
 * @returns {number} Тип фильма в виде числа
 */
 function typeSelector(type){ //Функция перевода типа в цифровой формат
    switch (type){
        case 'movie':
            return 1
        case 'tv-series':
            return 2
        case 'cartoon':
            return 3
        case 'anime':
            return 4
        case 'animated-series':
            return 5
        case 'tv-show':
            return 6
    }
}

module.exports = {getMovies,parseToDB};