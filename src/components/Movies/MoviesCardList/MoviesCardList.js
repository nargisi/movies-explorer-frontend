import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

const MoviesCardList = (props) => {
  const { movies } = props;
  const { isSavedPage = false } = props;

  return (
    <div className="movies-card-list__container">
      <ul className="movies-card-list__box">
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            src={`https://api.nomoreparties.co/${movie.image.url}`}
            title={movie.nameRU}
            duration={movie.duration}
            key={movie._id}
            liked={movie.liked}
            isSavedPage={isSavedPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesCardList;
