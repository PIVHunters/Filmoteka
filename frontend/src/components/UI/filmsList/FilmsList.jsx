import React, {useContext, useEffect, useState} from 'react';
import cl from "./FilmsList.module.css"
import FilmsListItem from "../filmsListItem/FilmsListItem";
import FilmsService from "../../../API/FilmsService";
import Filters from "../filters/Filters";
import Pagination from "../../pagination/Pagination";
import SerialsService from "../../../API/SerialsService";
import {Context} from "../../../index";
import {fetchFilms} from "../../../http/filmAPI";

/**
 * Общий список фильмов/сериалов
 * @param props (title) - заголовок списка
 * @returns {JSX.Element} HTML-код компонента
 */
const FilmsList = ({title}) => {

    const {film} = useContext(Context)

    // const [currentPage, setCurrentPage] = useState(1)
    // const [fetching, setFetching] = useState(true)

    // useEffect(() => {
    //     // fetchFilms(film.selectedType).then(data => film.setFilms(data))
    //     for (let data in film.films) {
    //         if (film.films[data].type_id === 1 && title === "Фильмы") {
    //             typedFilms.push(film.films[data])
    //             console.log(typedFilms[data].film_id)
    //         }
    //         else {
    //         if (film.films[data].type_id === 2 && title === "Сериалы") {
    //             typedFilms.push(film.films[data])
    //             }
    //         }
    //
    //     }
    // }, [])

    return (
        <div>
            <div className={cl.header}>{title}</div>
            <div className={cl['films-list__container']}>
                <div className={cl.list}>
                    {film.films.map((film) => {
                        if (film.type_id === 1 && title === "Фильмы") {
                            return <FilmsListItem name={film.name}
                               type_id = {film.type_id}
                               user_mark={film.user_mark}
                               id={film.film_id}
                               img={film.poster}
                               key={film.film_id}/>}
                        else if (film.type_id === 2 && title === "Сериалы")
                            return <FilmsListItem name={film.name}
                               type_id = {film.type_id}
                               user_mark={film.user_mark}
                               id={film.film_id}
                               img={film.poster}
                               key={film.film_id}/>
                    }

                    )}
                </div>
                <Filters />
            </div>
            {/*<Pagination fetching={fetching} setFetching={setFetching}*/}
            {/*            currentPage={currentPage} setCurrentPage={setCurrentPage}*/}
            {/*            items={film.films}*/}
            {/*            service={title === "Фильмы" ? FilmsService : SerialsService}*/}
            {/*            title={title}*/}
            {/*/>*/}

        </div>
    );
};

export default FilmsList;