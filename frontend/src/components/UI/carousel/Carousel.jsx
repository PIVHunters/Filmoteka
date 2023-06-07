import React, {useContext, useEffect, useState} from 'react';
import cl from "./Carousel.module.css";
import CarouselItem from "../carouselItem/CarouselItem";
import CarouselService from "../../../API/CarouselService";
import {Context} from "../../../index";

/**
 * Список-карусель фильмов/сериалов
 * @param props (header) - Заголовок списка-карусели
 * @returns {JSX.Element} HTML-код компонента
 */
const Carousel = ({header}) => {

    const {film} = useContext(Context)

    // const [comingOutItems, setComingOutItems] = useState([])

    useEffect(() => {
        // fetchFilms(film.selectedType).then(data => film.setFilms(data))
        // fetchFilms()
    }, [])


    // async function fetchFilms() {
    //     const response = await CarouselService.getAll()
    //     setComingOutItems(response)
    // }

    return (
        <div className={cl["coming-out"]}>
            <div className={cl["coming-out__header"]}>{header}</div>
            <div className={cl["coming-out__items"]}>
                {header === "Фильмы в прокате" ?
                film.comingOutFilms.map((film) =>
                    <CarouselItem name={film.name}
                                  type_id = {film.type_id}
                                  user_mark={film.user_mark}
                                  id={film.film_id}
                                  img={film.poster}
                                  key={film.film_id}/>
                    )
                    : header === "Сериалы в прокате" ?
                        film.comingOutSerials.map((film) =>
                            <CarouselItem name={film.name}
                                          type_id = {film.type_id}
                                          user_mark={film.user_mark}
                                          id={film.film_id}
                                          img={film.poster}
                                          key={film.film_id}/>
                        ): ""
                }
            </div>
        </div>
    );
};

export default Carousel;