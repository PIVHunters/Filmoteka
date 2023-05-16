import React from 'react';
import FilmsList from "../components/UI/filmsList/FilmsList";

const Films = (props) => {
    return (
        <section>
            <FilmsList title={props.title}/>
        </section>
    );
};

export default Films;