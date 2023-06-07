import React from 'react';
import cl from "./NewsItem.module.css";
import {Link} from "react-router-dom";

const NewsItem = ({name, poster, id, date}) => {

    const path = "/news/" + id

    return (
        <article className={cl.item} title={name}>
            <Link to={path} className={cl.item__link}>
                <div className={cl.item__picture__wrapper}>
                    <img className={cl.item__picture} src={poster} alt={name}></img>
                </div>
                <div className={cl.item__text}>
                    <p className={cl.item__name}>{name}</p>
                    <p className={cl.item__date}>{date}</p>           {/*Исправить*/}
                </div>
            </Link>


        </article>
    );
};

export default NewsItem;