import React from 'react';
import Carousel from "../components/UI/carousel/Carousel";
import News from "../components/UI/news/News";

const Main = () => {
    return (
        <section>
            <Carousel header="Фильмы в прокате"/>
            <Carousel header="Сериалы в прокате"/>
            <News />
        </section>
    );
};

export default Main;