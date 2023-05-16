import React from 'react';
import cl from "./FilmsListItem.module.css";
import {Link} from "react-router-dom";

const FilmsListItem = (props) => {

    const path = '/films/' + props.item.id

    return (
        <article className={cl.item} title={props.item.title}>
            <Link to={path}>
                <div className={cl["item__picture-wrapper"]}>
                    <img className={cl.item__picture} src={props.item.url} alt={props.item.title}></img>
                </div>
                <p className={cl.item__title}>{props.item.title}</p>
            </Link>
        </article>
    );
};

export default FilmsListItem;