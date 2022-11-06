import React from 'react';
import { InitialMovies } from '../../utils/constants';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  return (
    <>
      <div className="movies__container">
        <Navigation />
        <SearchForm />
        <MoviesCardList movies={InitialMovies} />
        <div className="movies__add-container">
          <button className="movies__add-button" aria-label="Еще">
            Ещё
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
