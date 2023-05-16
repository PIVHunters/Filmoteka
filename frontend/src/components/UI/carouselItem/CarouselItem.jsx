import React from 'react';
import cl from "./CarouselItem.module.css";
import {Link} from "react-router-dom";


/**
 * Элемент списка-карусели фильмов/сериалов
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CarouselItem = (props) => {

    const path = "/films/" + props.itemContent.id

    return (
        <article className={cl.item} title={props.itemContent.title}>
            <Link to={path}>
                <div className={cl["picture-wrapper"]}>
                    <img className={cl.item__picture}
                         alt={props.itemContent.title}
                         src={props.itemContent.url}>
                    </img>
                </div>

                <p className={cl.item__name}>{props.itemContent.title}</p>
            </Link>
        </article>
    );
};

export default CarouselItem;