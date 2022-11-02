import React from 'react';
import {Link} from 'react-router-dom';
import '../Portfolio/Portfolio.css'

function Portfolio() {
    return (
        <>
            <p className="portfolio__title">Портфолио</p>
            <div className="portfolio__box">
                <p className="portfolio__subtitle">Статичный сайт</p>
                <Link className="portfolio__link" to="#">&#x2197;</Link>
            </div>
            <div className="portfolio__line"></div>
            <div className="portfolio__box">
                <p className="portfolio__subtitle">Адаптивный сайт</p>
                <Link className="portfolio__link" to="#">&#x2197;</Link>
            </div>
            <div className="portfolio__line"></div>
            <div className="portfolio__box">
                <p className="portfolio__subtitle">Одностраничное приложение</p>
                <Link className="portfolio__link" to="#">&#x2197;</Link>
            </div>
        </>
    )

}

export default Portfolio