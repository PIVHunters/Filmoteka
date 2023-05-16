import React, {useState} from 'react';
import cl from "./FiltersSelectListItem.module.css";

const FiltersSelectListItem = (props) => {
    const [checked, setChecked] = useState(false)

    return (
        <li className={cl['select-block__item']} onClick={() => (!checked) ? setChecked(true) : setChecked(false)}>
            <input type="checkbox" className={cl.filter__checkbox} checked={checked} onChange={(() => setChecked(!checked))}/>
            {props.value}
        </li>
    );
};

export default FiltersSelectListItem;