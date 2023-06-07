import React from 'react';
import cl from "./CarouselItem.module.css";
import {Link} from "react-router-dom";


/**
 * Элемент списка-карусели фильмов/сериалов
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CarouselItem = ({name, id, img, type_id, user_mark}) => {

    const path = "/films/" + id

    return (
        <article className={cl.item} title={name}>
            <Link to={path}>
                <div className={cl["picture-wrapper"]}>
                    <img className={cl.item__picture}
                         alt={name}
                         src={img}>
                    </img>
                </div>

                <p className={cl.item__name}>{name}</p>
            </Link>
        </article>
    );
};

export default CarouselItem;