import React from 'react';
import cl from "./Error.module.css"

const Error = () => {
    return (
        <section className={cl.error__wrapper}>
            <h1 className={cl.error__header}>Неизвестная страница</h1>
        </section>
    );
};

export default Error;