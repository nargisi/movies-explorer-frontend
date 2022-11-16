import React, { useEffect, useState } from 'react';
import movies_api from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    movies_api
      .getMovies()
      .then((moviesData) => {
        setMovies(moviesData);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Navigation />
      <section className="movies__container">
        <SearchForm handleSubmit={handleSubmit} />
        <MoviesCardList movies={movies} />
        <div className="movies__add-container">
          <button className="movies__add-button" aria-label="Еще">
            Ещё
          </button>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Movies;
