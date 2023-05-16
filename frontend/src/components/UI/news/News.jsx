import React, {useState} from 'react';
import cl from "./News.module.css"
import NewsItem from "../newsItem/NewsItem";
import Pagination from "../../pagination/Pagination";
import NewsService from "../../../API/NewsService";

/**
 * Список новостей
 * @returns {JSX.Element} HTML-код компонента
 */
const News = () => {

    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)



    return (
        <div className={cl.news}>
            <div className={cl.news__header}>Новости</div>
            <div className={cl.news__list}>
                {news.map((item) =>
                    <NewsItem item={item} key={item.id}/>
                )}
            </div>
            <Pagination fetching={fetching} setFetching={setFetching}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        items={news} setItems={setNews}
                        service={NewsService}
            />
        </div>
    );
};

export default News;