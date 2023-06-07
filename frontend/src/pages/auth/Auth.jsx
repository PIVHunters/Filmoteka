import React, {useContext, useState} from 'react';
import cl from "./Auth.module.css"
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../utils/consts";
import {login, registration} from "../../http/userAPI";
import {Context} from "../../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('');
    let navigate = useNavigate();
    const isLogin = window.location.pathname === LOGIN_ROUTE; //Проверка текущей ссылки
    const handleNickNameChange = (e) => {
        setNickname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const signIn = async () =>{
        try{
            let data;
            if(isLogin){
                console.log('Это логин')
                data = await login(nickname,password);
                console.log(data)
            }else{
                data = await registration(nickname,password,email);
                console.log(data)
            }
            user.setUser({data})
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        }catch (e){
            setError("Ошибка")
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
            // отправляем данные на сервер или выполняем другие действия
            console.log('Nick пользователя:', nickname);
            await signIn().then(r => console.log('Пользователь успешно создан'))

    };
    const unsetVars =()=>{
        setNickname('');
        setPassword('')
        setEmail('');
        setError('');
    }
    return (
        <section className={cl.AuthPage}>
            <div className={cl.Auth}>
                {isLogin ?<div className={cl.title}>Авторизация</div> : <div className={cl.title}>Регистрация</div>}
                {isLogin ?
                    <form className={cl.inputForm}>
                        <div className={cl.inputBlock}>
                            <input className={cl.authInput} type="name" id="userNickname" value={nickname} onChange={handleNickNameChange} required placeholder="Введите nickname..."/>
                            <input className={cl.authInput} type="password" id="userPassword" value={password} onChange={handlePasswordChange} required placeholder="Введите пароль..."/>
                            {error ? <p className={cl.error}>{error}</p> : null}
                        </div>
                        <div className={cl.authButtons}>
                            <button type="submit" onClick={handleSubmit}>Войти</button>
                            <div className={cl.anotherOption}>
                                <p className={cl.notice}>Нет аккаунта?</p>
                                <Link className={cl.Link} onClick={unsetVars} to='/registration'>Зарегистрироваться</Link>
                            </div>
                        </div>
                    </form>
                    :
                    <form onSubmit={handleSubmit} className={cl.inputForm} >
                        <div className={cl.inputBlock}>
                            <input className={cl.authInput} type="nickname" id="userNickName" value={nickname} onChange={handleNickNameChange} required placeholder="Введите nickname..."/>
                            <input className={cl.authInput} type="password" id="userPassword" value={password} onChange={handlePasswordChange} required placeholder="Введите пароль..."/>
                            <input className={cl.authInput} type="email" id="emailReg" value={email} onChange={handleEmailChange} required placeholder="Введите почту..."/>
                            {error ? <p className={cl.error}>{error}</p> : null}
                        </div>
                        <div className={cl.authButtons}>
                            <button type="submit">Зарегистрироваться</button>
                            <div className={cl.anotherOption}>
                                <p className={cl.notice}>Уже есть аккаунт?</p>
                                <Link className={cl.Link} onClick={unsetVars} to={LOGIN_ROUTE}>Войти</Link>
                            </div>
                        </div>
                    </form>
                }

            </div>

        </section>
    );
});

export default Auth;