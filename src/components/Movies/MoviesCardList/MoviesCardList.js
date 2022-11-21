import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

const MoviesCardList = (props) => {
  const { movies, isSavedPage = false } = props;

  return (
    <div className="movies-card-list__container">
      <ul className="movies-card-list__box">
        {movies.map((movie) => (
          <MoviesCard
            trailerLink={movie.trailerLink}
            movie={movie}
            title={movie.nameRU}
            duration={movie.duration}
            key={movie.id || movie.movieId}
            liked={movie.liked}
            isSavedPage={isSavedPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesCardList;
