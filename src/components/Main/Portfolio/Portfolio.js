import React from 'react';
import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <>
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__box">
          <a
            className="portfolio__link"
            href="https://github.com/nargisi/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__subtitle">Статичный сайт</span>
            <span className="portfolio__arrow">&#x2197;</span>
          </a>
        </li>
        <li className="portfolio__box">
          <a
            className="portfolio__link"
            href="https://github.com/nargisi/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__subtitle">Адаптивный сайт</span>
            <span className="portfolio__arrow">&#x2197;</span>
          </a>
        </li>
        <li className="portfolio__box">
          <a
            className="portfolio__link"
            href="https://github.com/nargisi/app-for-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__subtitle">
              Одностраничное приложение
            </span>
            <span className="portfolio__arrow">&#x2197;</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
