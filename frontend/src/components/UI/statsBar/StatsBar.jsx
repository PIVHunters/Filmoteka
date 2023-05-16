import React from 'react';
import cl from "./StatsBar.module.css"

/**
 * Шкала, визуально отображающая списки запланированного, просмотренного и брошенного
 * @param props (title) - Название шкалы
 * @returns {JSX.Element}
 * @constructor
 */
const StatsBar = (props) => {
    const f = 40;
    const s = 16;
    const t = 9;

    return (
        <div className={cl.wrapper}>
            <div className={cl.type}>{props.title}</div>
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