import React from 'react';
import mainApi from '../../../utils/MainApi';
import { toHoursAndMinutes } from '../../../utils/utils';
import '../MoviesCard/MoviesCard.css';

const MoviesCard = (props) => {
  console.log('ard props', props);
  const { liked, title, duration, isSavedPage, trailerLink, movie, onLike } =
    props;
  const imageUrl =
    typeof movie.image === 'string'
      ? movie.image
      : `https://api.nomoreparties.co/${movie.image.url}`;
  const thumbnailUrl = movie.thumbnail
    ? movie.thumbnail
    : `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;
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
    if (liked || isSavedPage) {
      mainApi
        .deleteMovie(isSavedPage ? movie._id : movie.savedMovieId)
        .then((res) => {
          onLike(res.data, false);
        });
    } else {
      const {
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        id,
        nameRU,
        nameEN,
      } = movie;

      const payload = {
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: imageUrl,
        trailerLink: trailerLink,
        thumbnail: thumbnailUrl,
        movieId: id,
        nameRU: nameRU,
        nameEN: nameEN,
      };
      mainApi.saveMovie(payload).then((res) => {
        onLike(res.data, true);
      });
    }
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
          <img className="movies-card__img" src={imageUrl} alt={title} />
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
