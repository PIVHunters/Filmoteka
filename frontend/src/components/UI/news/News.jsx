import React, {useContext, useState} from 'react';
import cl from "./News.module.css"
import NewsItem from "../newsItem/NewsItem";
import Pagination from "../../pagination/Pagination";
import NewsService from "../../../API/NewsService";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

/**
 * Список новостей
 * @returns {JSX.Element} HTML-код компонента
 */
const News = observer(() => {

    const {news} = useContext(Context)

    // const [news, setNews] = useState([])
    // const [currentPage, setCurrentPage] = useState(1)
    // const [fetching, setFetching] = useState(true)




    return (
        <div className={cl.news}>
            <div className={cl.news__header}>Новости</div>
            <div className={cl.news__list}>
                {news.data.map((item) =>
                    <NewsItem name={item.name} poster={item.poster} id={item.id} date={item.date} key={item.news_id}/>
                )}
            </div>
            {/*<Pagination fetching={fetching} setFetching={setFetching}*/}
            {/*            currentPage={currentPage} setCurrentPage={setCurrentPage}*/}
            {/*            items={news} setItems={setNews}*/}
            {/*            service={NewsService}*/}
            {/*/>*/}
        </div>
    );
});

export default News;