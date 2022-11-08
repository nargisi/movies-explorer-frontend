import React from 'react';
import { SavedMoviesArr } from '../../utils/constants';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import '../SavedMovies/SavedMovies.css';

const SavedMovies = () => {
  return (
    <div className="saved-movies__container">
      <Navigation />
      <SearchForm />
      <MoviesCardList movies={SavedMoviesArr} isSavedPage />
      <div className="movies__add-container"></div>
      <Footer />
    </div>
  );
};

export default SavedMovies;
