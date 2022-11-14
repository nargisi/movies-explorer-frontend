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
            src={movie.src}
            title={movie.title}
            key={movie.title}
            liked={movie.liked}
            isSavedPage={isSavedPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesCardList;
