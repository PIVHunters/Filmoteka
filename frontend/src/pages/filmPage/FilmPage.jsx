import React, {useContext, useEffect} from 'react';
import cl from "./FilmPage.module.css"
import {useParams} from "react-router-dom";
import img from "../../images/Group1.png";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const FilmPage = observer(() => {
    // fetchOneFilm(id).then(data => setFilm(data))

    const {film} = useContext(Context)

    const {id} = useParams()


    useEffect(() =>{
        for (let data in film.films) {
            if (film.films[data].film_id === parseInt(id)) {
                film.setSelectedFilm(film.films[data])
            }
        }

    }, [])

    return (
        <section>
            <div className={cl.title}>{film.selectedFilm.name}</div>
            <div className={cl.breadcrumbs}>Фильмы / Драма</div>
            <div className={cl["full-info-wrapper"]}>
                <div className={cl["left-info"]}>
                    <div className={cl["picture-wrapper"]}>
                        <img className={cl.picture} src={film.selectedFilm.poster} alt={film.selectedFilm.name}></img>
                    </div>
                    <div className={cl.info}>
                        <div className={cl.text__title}>Информация</div>
                        <div className={cl.info__text}>Тип: {"Фильм"}</div>
                        <div className={cl.info__text}>Жанр: {"Драма, фэнтези, криминал"}</div>
                        {/*<div className={cl.info__text}>Сезоны: {film.selectedFilm.seasons_number}</div>*/}
                        <div className={cl.info__text}>Длительность: {film.selectedFilm.duration}</div>
                        <div className={cl.info__text}>Возраст: 16+</div>
                        <div className={cl.info__text}>Премьера в мире: {film.selectedFilm.release_year}</div>
                    </div>
                </div>
                <div className={cl["rating-wrapper"]}>
                    <div className={cl.rating}>Рейтинг: 9.9</div>
                    <div className={cl.rating}>Кинопоиск: {film.selectedFilm.kp_rating}</div>
                    <div className={cl.rating}>IMDb: {film.selectedFilm.imdb_rating}</div>
                </div>
            </div>
            <div className={cl.description}>
                <div className={cl.text__title}>Описание</div>
                <div className={cl.description__text}>
                    {film.selectedFilm.description}
                </div>
            </div>
        </section>
    );
});

export default FilmPage;