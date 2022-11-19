import React from 'react';
import mainApi from '../../../utils/MainApi';
import { toHoursAndMinutes } from '../../../utils/utils';
import '../MoviesCard/MoviesCard.css';

const MoviesCard = (props) => {
  const { liked, src, title, duration, isSavedPage, trailerLink } = props;
  // Создаём переменную, которую после зададим в `className` для кнопки
  let cardButtonClassName;
  if (isSavedPage) {
    cardButtonClassName = `movies-card__button movies-card__button-delete`;
  } else {
    cardButtonClassName = `movies-card__button ${
      liked ? ' movies-card__button-like' : 'movies-card__button-unlike '
    }`;
  }

  const handleLikeClick = () => {
    mainApi.saveMovie().then((data) => {
      console.log(data);
    });
  };

  return (
    <li className="movies-card__item">
      <div className="movies-card__container">
        <a
          className="movies-card__link"
          href={trailerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="movies-card__img" src={src} alt={title} />
        </a>
      </div>
      <div className="movies-card__sign">
        <h2 className="movies-card__title">{title}</h2>
        <button
          onClick={handleLikeClick}
          className={cardButtonClassName}
          type="button"
          aria-label="Кнопка"
        />
      </div>
      <div className="movies-card__duration">{toHoursAndMinutes(duration)}</div>
    </li>
  );
};

export default MoviesCard;
