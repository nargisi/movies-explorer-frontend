import React from 'react';
import { toHoursAndMinutes } from '../../../utils/utils';
import '../MoviesCard/MoviesCard.css';

const MoviesCard = (props) => {
  const { liked, src, title, duration, isSavedPage, trailerLink } = props;
  // Создаём переменную, которую после зададим в `className` для кнопки
  let cardButtonClassName;
  console.log(liked);
  if (isSavedPage) {
    cardButtonClassName = `movies-card__button movies-card__button-delete`;
  } else {
    cardButtonClassName = `movies-card__button ${
      liked ? ' movies-card__button-like' : 'movies-card__button-unlike '
    }`;
  }

  return (
    <li className="movies-card__item">
      <a
        className="movies-card__link"
        href={trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="movies-card__container">
          <img className="movies-card__img" src={src} alt={title} />
        </div>
        <div className="movies-card__sign">
          <h2 className="movies-card__title">{title}</h2>
          <button
            className={cardButtonClassName}
            type="button"
            aria-label="Кнопка"
          />
        </div>
        <div className="movies-card__duration">
          {toHoursAndMinutes(duration)}
        </div>
      </a>
    </li>
  );
};

export default MoviesCard;
