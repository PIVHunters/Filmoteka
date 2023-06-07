import React, {useContext} from 'react';
import cl from "./StatsBar.module.css"
import {Context} from "../../../index";

/**
 * Шкала, визуально отображающая списки запланированного, просмотренного и брошенного
 * @param props (title) - Название шкалы
 * @returns {JSX.Element}
 * @constructor
 */
const StatsBar = ({title}) => {

    const {user} = useContext(Context)
    let f, s, t
    if (title === "Фильмы") {
        f = user.activity[0];
        s = user.activity[1];
        t = user.activity[2];
    }
        else {
        f = user.activity[3];
        s = user.activity[4];
        t = user.activity[5];
        }


    return (
        <div className={cl.wrapper}>
            <div className={cl.type}>{title}</div>
            <div className={cl.bar}>
                <div style={{width: `calc((${f} / (${f} + ${s} + ${t})) * 100%)`}} className={cl.first}></div>
                <div style={{width: `calc((${s} / (${f} + ${s} + ${t})) * 100%)`}} className={cl.second}></div>
                <div style={{width: `calc((${t} / (${f} + ${s} + ${t})) * 100%)`}} className={cl.third}></div>
            </div>
            <div className={cl["bar-names"]}>
                <span className={cl["bar-names__first"]}>Запланировано ({f})</span>
                <span className={cl["bar-names__second"]}>Просмотрено ({s})</span>
                <span className={cl["bar-names__third"]}>Брошено ({t})</span>
            </div>
        </div>
    );
};

export default StatsBar;