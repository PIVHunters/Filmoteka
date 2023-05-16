import React from 'react';
import cl from "./Footer.module.css"

/**
 * Подвал страницы
 * @returns {JSX.Element} HTML-код компонента
 */
const Footer = () => {
    return (
        <div className={cl["footer-wrapper"]}>
            <hr/>
            <div className={cl.footer}>
                <div className={cl.footer__text}>2023 PIVHunters Projects @ </div>
            </div>
        </div>
    );
};

export default Footer;