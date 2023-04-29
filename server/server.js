require('dotenv').config() //Подключаем библиотеку переменных окружения
const express = require('express'); //Подключаем модуль express

const server = express(); // Создание экземпляра express
const PORT = process.env.PORT || 3000;

server.use(express.static('./client')); //Имя папки где хранится система

server.listen(PORT,() =>{
    console.log(`Сервер запущен на порту ${PORT}`);
});

server.get('/', function (req, res){
    console.log('load /')
    res.render('index.html');
});