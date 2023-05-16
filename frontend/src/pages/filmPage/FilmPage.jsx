import React from 'react';
import cl from "./FilmPage.module.css"
import poster from "../../images/Group1.png"

const FilmPage = () => {
    return (
        <section>
            <div className={cl.title}>Жизнь Петра / Petr's Life</div>
            <div className={cl.breadcrumbs}>Сериалы / Драма</div>
            <div className={cl["full-info-wrapper"]}>
                <div className={cl["left-info"]}>
                    <div className={cl["picture-wrapper"]}>
                        <img className={cl.picture} src={poster} alt="Жизнь Петра"></img>
                    </div>
                    <div className={cl.info}>
                        <div className={cl.text__title}> Информация</div>
                        <div className={cl.info__text}>Тип: Сериал</div>
                        <div className={cl.info__text}>Жанр: Драма</div>
                        <div className={cl.info__text}>Сезоны: 3</div>
                        <div className={cl.info__text}>Длительность: 40 мин</div>
                        <div className={cl.info__text}>Возраст: 0+</div>
                        <div className={cl.info__text}>Премьера в мире: 1990</div>
                    </div>
                </div>
                <div className={cl["rating-wrapper"]}>
                    <div className={cl.rating}>Рейтинг: 9.9</div>
                    <div className={cl.rating}>Кинопоиск: 8.7</div>
                    <div className={cl.rating}>IMDb: 8.5</div>
                </div>
            </div>
            <div className={cl.description}>
                <div className={cl.text__title}>Описание</div>
                <div className={cl.description__text}>
                    Сериал повествует о жизни Петра - настоящего русского думера, живущего на просторах бывшего СССР.
                </div>
            </div>
        </section>
    );
};

export default FilmPage;