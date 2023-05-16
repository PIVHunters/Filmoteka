import React from 'react';
import cl from "./FiltersSelectList.module.css";
import FiltersSelectListItem from "../filtersSelectListItem/FiltersSelectListItem";

/**
 * 
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const FiltersSelectList = (props) => {

    return (
        <div className={cl['select-block']}>
            <p className={cl['select-block__title']}>{props.title}</p>
            <ul className={cl['select-block__list']}>
                {props.params.map((value) =>
                    <FiltersSelectListItem value={value} key={value}/>
                )}
            </ul>
        </div>
    );
};

export default FiltersSelectList;