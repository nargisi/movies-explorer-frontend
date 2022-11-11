import React from 'react';
import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <>
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__box">
          <p className="portfolio__subtitle">Статичный сайт</p>
          <a
            className="portfolio__link"
            href="https://github.com/nargisi/movies-explorer-frontend/pull/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#x2197;
          </a>
        </li>
        <li className="portfolio__box">
          <p className="portfolio__subtitle">Адаптивный сайт</p>
          <a
            className="portfolio__link"
            href="https://github.com/nargisi/movies-explorer-frontend/pull/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#x2197;
          </a>
        </li>
        <li className="portfolio__box">
          <p className="portfolio__subtitle">Одностраничное приложение</p>
          <a
            className="portfolio__link"
            href="https://github.com/nargisi/movies-explorer-frontend/pull/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            &#x2197;
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
