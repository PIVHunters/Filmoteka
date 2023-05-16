import React, {useEffect, useState} from 'react';
import cl from "./Carousel.module.css";
import CarouselItem from "../carouselItem/CarouselItem";
import CarouselService from "../../../API/CarouselService";

/**
 * Список-карусель фильмов/сериалов
 * @param props (header) - Заголовок списка-карусели
 * @returns {JSX.Element} HTML-код компонента
 */
const Carousel = (props) => {

    const [comingOutItems, setComingOutItems] = useState([])

    useEffect(() => {
        fetchFilms()
    }, [])


    async function fetchFilms() {
        const response = await CarouselService.getAll()
        setComingOutItems(response)
    }

    return (
        <div className={cl["coming-out"]}>
            <div className={cl["coming-out__header"]}>{props.header}</div>
            <div className={cl["coming-out__items"]}>
                {comingOutItems.map((itemContent) =>
                    <CarouselItem itemContent={itemContent} key={itemContent.id}/>
                )}
            </div>
        </div>
    );
};

export default Carousel;