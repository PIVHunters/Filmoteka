import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Films from "../pages/Films";
import Error from "../pages/error/Error";
import FilmPage from "../pages/filmPage/FilmPage";
import SignIn from "../pages/signIn/SignIn";
import UserProfile from "../pages/userProfile/UserProfile";
import avatar from "../images/Avatar.png";

/**
 * Компонент, отвечающий за настройку маршрутов сайты
 * @returns {JSX.Element} HTML-код компонента
 */
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/main" element={<Main/>} />
            <Route path="/" element={<Main/>} />
            <Route path="/films" element={<Films title={"Фильмы"}/>} />
            <Route path="/serials" element={<Films title={"Сериалы"}/>} />
            <Route path="*" element={<Error/>} />
            <Route path="/film_page" element={<FilmPage/>} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/user_profile" element={<UserProfile />}/>
            <Route path="/films/:id" element={<FilmPage />} />
            {/*<Route path="/news/:id" element={""} /> ПОФИКСИТЬ*/}
        </Routes>
    );
};

export default AppRouter;