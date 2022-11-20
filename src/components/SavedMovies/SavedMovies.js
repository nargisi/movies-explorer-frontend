import React, { useState } from 'react';
// import { SavedMoviesArr } from '../../utils/constants';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import '../SavedMovies/SavedMovies.css';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  return (
    <>
      <Navigation />
      <section className="saved-movies__container">
        <SearchForm />
        <MoviesCardList isSavedPage movies={savedMovies} />
        <div className="movies__add-container"></div>
        <Footer />
      </section>
    </>
  );
};

export default SavedMovies;
