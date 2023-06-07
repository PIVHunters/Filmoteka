import React from 'react';
import FilmsList from "../components/UI/filmsList/FilmsList";

const Films = ({title}) => {
    return (
        <section>
            <FilmsList title={title}/>
        </section>
    );
};

export default Films;