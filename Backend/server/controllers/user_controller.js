const ApiError = require('../error/ApiError')
const {pool} = require('../db')
const bcrypt = require('bcrypt') // Подключение библиотеки хеширования
const jwt = require('jsonwebtoken') // Подключение библиотеки JWT

function  generateJWT(id,nickname,email){
    console.log('Получил: ', id, nickname,email)
    return jwt.sign({id,nickname,email},process.env.SECRET_KEY,{expiresIn: '12h'})
}
class UserController{ //Класс для взаимодействия с пользователями
    async registration(req,res,next){ // Функция регистрации пользователя
        const {nickname,password,email} = req.body
        if(!nickname || !password || !email){ //Проверка корректности ввода
            return next(ApiError.badRequest('Некорректный ввод данных'))
        }
        const candidate = await pool.query('SELECT nickname FROM public.user WHERE nickname=$1',[nickname])
        if(candidate.rows[0]){
            return next(ApiError.badRequest('Пользователь с таким nickname уже зарегистрирован'))
        }
        const hashPass = await bcrypt.hash(password,5) //Хэшируем пароль
        const usersInfo = [nickname,email,hashPass]
        const user = await pool.query("INSERT INTO public.user (nickname,email,password) VALUES ($1,$2,$3) RETURNING *",usersInfo)
        let siteUser = user.rows[0]
        const token = generateJWT(siteUser.user_id,nickname,email)
        return res.json({token})
    }
    async getUsers(req,res){ //Тестовая функция вывода пользователей
        const users = await pool.query('SELECT * FROM public.user')
        res.json(users.rows)
    }
    async login(req,res,next){
        const {nickname,password} = req.body
        console.log('Вход в функцию логина')
        console.log('nick: ',nickname,'\n password: ',password)
        let user = await pool.query('SELECT user_id,nickname,password,photo,email FROM public.user WHERE nickname=$1',[nickname])
        if ((typeof user.rows[0] == "undefined")){
            return next(ApiError.internal('Неверный nickname'))
        }
        let comparePassword = bcrypt.compareSync(password,user.rows[0].password)
        if (!comparePassword){
            return next(ApiError.internal('Неверный пароль'))
        }
        console.log("Генерирую токен")
        console.log("user.rows[0]: ",user.rows[0],)
        const token = generateJWT(user.rows[0].user_id,nickname,user.rows[0].email)
        return res.json({token})
    }
    async checkUser(req,res){
        const token = generateJWT(req.user.user_id,req.user.nickname,req.user.email)
        return res.json({token})
    }
}
module.exports = new UserController()