import React from 'react';
import cl from "./NewsItem.module.css";
import {Link} from "react-router-dom";

const NewsItem = (props) => {

    const path = "/news/" + props.item.id

    return (
        <article className={cl.item} title={props.item.title}>
            <Link to={path} className={cl.item__link}>
                <div className={cl.item__picture__wrapper}>
                    <img className={cl.item__picture} src={props.item.url} alt={props.item.title}></img>
                </div>
                <div className={cl.item__text}>
                    <p className={cl.item__name}>{props.item.title}</p>
                    <p className={cl.item__date}>1 день назад</p>           {/*Исправить*/}
                </div>
            </Link>


        </article>
    );
};

export default NewsItem;