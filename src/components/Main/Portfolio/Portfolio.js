import React from 'react';
import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <>
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__box">
          <p className="portfolio__subtitle">Статичный сайт</p>
          <span className="portfolio__link" to="#">
            &#x2197;
          </span>
        </li>
        <li className="portfolio__box">
          <p className="portfolio__subtitle">Адаптивный сайт</p>
          <span className="portfolio__link" to="#">
            &#x2197;
          </span>
        </li>
        <li className="portfolio__box">
          <p className="portfolio__subtitle">Одностраничное приложение</p>
          <span className="portfolio__link" to="#">
            &#x2197;
          </span>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
