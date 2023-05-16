import React, {useState} from 'react';
import cl from "./FilmsList.module.css"
import FilmsListItem from "../filmsListItem/FilmsListItem";
import FilmsService from "../../../API/FilmsService";
import Filters from "../filters/Filters";
import Pagination from "../../pagination/Pagination";
import SerialsService from "../../../API/SerialsService";

/**
 * Общий список фильмов/сериалов
 * @param props (title) - заголовок списка
 * @returns {JSX.Element} HTML-код компонента
 */
const FilmsList = (props) => {

    const [films, setFilms] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    return (
        <div>
            <div className={cl.header}>{props.title}</div>
            <div className={cl['films-list__container']}>
                <div className={cl.list}>
                    {films.map((item) =>
                        <FilmsListItem item={item} key={item.id}/>
                    )}
                </div>
                <Filters />
            </div>
            <Pagination fetching={fetching} setFetching={setFetching}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        items={films} setItems={setFilms}
                        service={props.title === "Фильмы" ? FilmsService : SerialsService}
                        title={props.title}
            />

        </div>
    );
};

export default FilmsList;