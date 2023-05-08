import React from 'react';
import {Link} from "react-router-dom";
import cl from "./Header.module.css";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__links}>
                <Link to="/main" className={cl.header__logo} title={"Фильмотека"}></Link>
                <Link to="/main" className={cl.header__logoText} title={"Фильмотека"}></Link>
                <Link to="/films" className={cl.header__link}>
                    <p className={cl.header__link__text}>Фильмы</p>
                </Link>
                <hr className={cl.header__delimiter}/>
                <Link to="/serials" className={cl.header__link}>
                    <p className={cl.header__link__text}>Сериалы</p>
                </Link>
            </div>
            <div className={cl.header__links}>
                <Link to="/sign_in" className={cl.header__link}>
                    <p className={cl.header__link__text}>Вход</p>
                </Link>
            </div>
        </header>
    );
};

export default Header;