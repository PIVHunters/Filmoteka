import React, {useContext, useEffect, useState} from 'react';
import cl from "./HistoryItem.module.css";
import history_item_picture from "../../../images/Group1.png";
import {Context} from "../../../index";

const HistoryItem = ({id, look, date}) => {

    const {film} = useContext(Context)
    const [filmData, setFilmData] = useState({})

    useEffect(() => {
        for (let data in film.films) {
            if (film.films[data].film_id === parseInt(id)) {
                setFilmData(film.films[data])
            }
        }
    }, [])

    return (
        <article className={cl.item}>
            <div className={cl["pic-wrapper"]}>
                <img className={cl.pic} src={filmData.poster} alt="history_picture"/>
            </div>
            <div className={cl.info}>
                <div className={cl.title}>{filmData.name}</div>
                <span className={cl.misc}>{look}</span>
                <span className={cl.misc}>{date}</span>
            </div>

        </article>
    );
};

export default HistoryItem;