import React from 'react';
import cl from "./UserProfile.module.css"
import HistoryItem from "../../components/UI/historyItem/HistoryItem";
import StatsBar from "../../components/UI/statsBar/StatsBar";
import Carousel from "../../components/UI/carousel/Carousel";

const UserProfile = (props) => {
    return (
        <section className={cl.wrapper}>
            <div className={cl.history}>
                <div className={cl.history__title}>История просмотров</div>
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
            </div>
            <div className={cl.info}>
                <div className={cl["avatar-wrapper"]}>
                    <img className={cl.avatar} src={props.avatar} alt="avatar"/>
                </div>
                <div className={cl.nickname}>{props.nickname}</div>
                <span className={cl.data}>{props.gender}</span>
                <span className={cl.data}>{props.age} года</span>
            </div>
            <StatsBar title={"Фильмы"}/>
            <StatsBar title={"Сериалы"}/>
            <div className={cl["active-time"]}>
                Общее время активности: 10 лет 2 дня
            </div>
            <Carousel header={"Любимые фильмы"}/>
            <Carousel header={"Любимые сериалы"}/>
        </section>
    );
};

export default UserProfile;