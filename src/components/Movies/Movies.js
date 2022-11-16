import React, { useEffect, useState } from 'react';
import movies_api from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    movies_api
      .getMovies()
      .then((moviesData) => {
        console.log('RE-re', moviesData);
        setMovies(
          moviesData.filter((movie) =>
            movie.nameRU.toLowerCase().includes(searchValue)
          )
        );
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navigation />
      <section className="movies__container">
        <SearchForm
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
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
