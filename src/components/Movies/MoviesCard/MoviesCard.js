import React from 'react';
import '../MoviesCard/MoviesCard.css';

const MoviesCard = (props) => {
  return (
    <li className="movies-card__item">
      <div className="movies-card__container">
        <img className="movies-card__img" src={props.src} alt={props.title} />
      </div>
      <div className="movies-card__sign">
        <h2 className="movies-card__title">{props.title}</h2>
        <button
          className="movies-card__like-button"
          type="button"
          aria-label="Поставить лайк"
        />
      </div>
      <div className="movies-card__duration">1ч 42 м</div>
    </li>
  );
};

export default MoviesCard;
