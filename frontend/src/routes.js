import MainPage from "./pages/MainPage";
import Auth from "./pages/auth/Auth";
import {
    ADMIN_ROUTE,
    FILM_ROUTE,
    FILMS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    SERIALS_ROUTE, USER_ROUTE
} from "./utils/consts";
import Films from "./pages/Films";
import React from "react";
import AdminPage from "./pages/AdminPage";
import FilmPage from "./pages/filmPage/FilmPage";
import UserProfile from "./pages/userProfile/UserProfile";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
         Component: <AdminPage />
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path: FILMS_ROUTE,
        Component: <Films title={"Фильмы"}/>
    },
    {
        path: SERIALS_ROUTE,
        Component: <Films title={"Сериалы"}/>
    },
    {
        path: FILM_ROUTE,
        Component: <FilmPage />
    },
    {
        path: USER_ROUTE,
        Component: <UserProfile />
    },
]