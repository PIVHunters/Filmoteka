import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Films from "../pages/Films";
import FilmPage from "../pages/filmPage/FilmPage";
import Auth from "../pages/auth/Auth";
import UserProfile from "../pages/userProfile/UserProfile";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

/**
 * Компонент, отвечающий за настройку маршрутов сайты
 * @returns {JSX.Element} HTML-код компонента
 */
const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} element={Component} key={path} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={Component} key={path} exact/>
            )}
            <Route path="*" element={<MainPage />} />
        </Routes>
    );
};

export default AppRouter;