import React from 'react';
import cl from "./HistoryItem.module.css";
import history_item_picture from "../../../images/Group1.png";

const HistoryItem = () => {
    return (
        <article className={cl.item}>
            <div className={cl["pic-wrapper"]}>
                <img className={cl.pic} src={history_item_picture} alt="history_picture"/>
            </div>
            <div className={cl.info}>
                <div className={cl.title}>Жизнь Петра</div>
                <span className={cl.misc}>Просмотрены с 2 по 9 эпизоды</span>
                <span className={cl.misc}> 3 дня назад</span>
            </div>

        </article>
    );
};

export default HistoryItem;