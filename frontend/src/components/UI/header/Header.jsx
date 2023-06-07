import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import cl from "./Header.module.css";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import avatar from "../../../images/Avatar.png"
import {FILMS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SERIALS_ROUTE} from "../../../utils/consts";
import {USER_ROUTE} from "../../../utils/consts";

/**
 * Шапка страницы
 * @returns {JSX.Element} HTML-код компонента
 */
const Header = observer(() => {
    const {user} = useContext(Context)

    const history = useNavigate()

    return (
        <header className={cl.header}>
            <div className={cl.header__links}>
                <Link to={MAIN_ROUTE} className={cl.header__logo} title={"Фильмотека"}></Link>
                <Link to={MAIN_ROUTE} className={cl.header__logoText} title={"Фильмотека"}></Link>
                <Link to={FILMS_ROUTE} className={cl.header__link}>
                    <p className={cl.header__link__text}>Фильмы</p>
                </Link>
                <hr className={cl.header__delimiter}/>
                <Link to={SERIALS_ROUTE} className={cl.header__link}>
                    <p className={cl.header__link__text}>Сериалы</p>
                </Link>
            </div>
            <div className={cl.header__links}>
                {!user.isAuth
                    ?
                    <Link to={LOGIN_ROUTE} className={cl.header__link}>
                        <p className={cl.header__link__text}>Вход</p>
                    </Link>
                    :
                    <button className={cl.header__profile} onClick={() => history(USER_ROUTE)}>
                        <div className={cl.image_wrapper}>
                            <img className={cl.avatar} src={user.data.photo} alt={"avatar"}/>
                        </div>
                        <p className={cl.header__link__text}>{user.data.nickname}</p>
                    </button>
                }
            </div>
        </header>
    );
});

export default Header;