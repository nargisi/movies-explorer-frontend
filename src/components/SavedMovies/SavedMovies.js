import React, { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
// import { SavedMoviesArr } from '../../utils/constants';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import '../SavedMovies/SavedMovies.css';

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [error, setError] = useState('');

  const handleChangeLike = (movie) => {
    setSavedMovies(
      savedMovies.filter((savedMovie) => savedMovie._id !== movie._id)
    );
  };

  useEffect(() => {
    mainApi
      .getMovies()
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <>
      <Navigation />
      <section className="saved-movies__container">
        <SearchForm />
        <MoviesCardList
          isSavedPage
          movies={savedMovies}
          onLike={handleChangeLike}
        />
        <div className="movies__add-container"></div>
        <Footer />
      </section>
    </>
  );
};

export default SavedMovies;
