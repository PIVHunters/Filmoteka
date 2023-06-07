import React from 'react';
import cl from "./FilmsListItem.module.css";
import {Link} from "react-router-dom";

const FilmsListItem = ({name, user_mark, type, img, id}) => {

    const path = '/films/' + id

    return (
        <article className={cl.item} title={name}>
            <Link to={path}>
                <div className={cl["item__picture-wrapper"]}>
                    <img className={cl.item__picture} src={img} alt={name}></img>
                </div>
                <p className={cl.item__title}>{name}</p>
            </Link>
        </article>
    );
};

export default FilmsListItem;