import React from 'react';
import cl from "./Filters.module.css"
import FiltersSelectList from "../filtersSelectList/FiltersSelectList";

/**
 * Меню фильтров для списка фильмов/сериалов
 * @returns {JSX.Element} HTML-код компонента
 */
const Filters = () => {
    return (
        <aside className={cl.menu}>

            <FiltersSelectList title={"Оценка"} params={[9, 8, 7, 6]}/>
            <FiltersSelectList title={"Рейтинг"} params={["0+", "12+", "14+", "16+", "18+"]}/>
            <FiltersSelectList title={"Жанры"} params=
                {["Биография", "Боевик", "Военное", "Детектив",
                    "Детское", "Комедия", "Криминал", "Мюзикл",
                    "Приключения", "Спорт", "Триллер", "Ужасы", "Фантастика", "Фэнтези"]}/>
        </aside>
    );
};

export default Filters;