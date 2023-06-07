import React from 'react';
import cl from "./Auth.module.css"

const Auth = () => {
    return (
        <section>
            <div className={cl.title}>Авторизация</div>
            <div className={cl["login-wrapper"]}>
                <div className={cl.login__title}>Логин</div>
                <form action=""></form>
            </div>
        </section>
    );
};

export default Auth;