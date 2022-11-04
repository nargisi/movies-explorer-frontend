import React from 'react';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import '../SavedMovies/SavedMovies.css';

const SavedMovies = () => {
  return (
    <>
      <div className="saved-movies__container">
        <Navigation />
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </div>
    </>
  );
};

export default SavedMovies;
