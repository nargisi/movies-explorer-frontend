import React, { useEffect, useMemo, useState } from 'react';
import {
  getSavedMoviesRenderParams,
  ShortsDuration,
} from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import Footer from '../Footer/Footer';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import '../SavedMovies/SavedMovies.css';

const SavedMovies = () => {
  const { moviesInRow, maxRows } = getSavedMoviesRenderParams();

  const [numberOfMoviesToRender, setNumberOfMoviesToRender] = useState(
    moviesInRow * maxRows
  );

  const [savedMovies, setSavedMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [onlyShort, setOnlyShort] = useState(false);

  const [searchIsCompleted, setSearchIsCompleted] = useState(false);

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

  useEffect(() => {
    let timeOutFunctionId;
    window.addEventListener('resize', () => {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(() => {
        const { moviesInRow: moviesInRowResize, maxRows: maxRowsResize } =
          getSavedMoviesRenderParams();
        setNumberOfMoviesToRender(moviesInRowResize * maxRowsResize);
      }, 500);
    });
  }, []);

  const moviesToRender = useMemo(() => {
    return savedMovies.filter(
      (savedMovie) =>
        (searchIsCompleted
          ? savedMovie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
          : true) && (onlyShort ? savedMovie.duration <= ShortsDuration : true)
    );
  }, [savedMovies, searchValue, searchIsCompleted, onlyShort]);

  let component;
  if (moviesToRender.length) {
    component = (
      <MoviesCardList
        onLike={handleChangeLike}
        movies={moviesToRender.slice(0, numberOfMoviesToRender)}
        isSavedPage
      />
    );
  } else if (error) {
    component = (
      <span className="spanError">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </span>
    );
  } else if (searchIsCompleted) {
    component = <span className="spanError">Ничего не найдено</span>;
  }

  const handleSubmit = ({ searchValue }) => {
    setSearchValue(searchValue);
    setSearchIsCompleted(true);
  };

  return (
    <>
      <Navigation />
      <section className="saved-movies__container">
        <SearchForm
          onSubmit={handleSubmit}
          setOnlyShort={setOnlyShort}
          onlyShort={onlyShort}
        />
        {component}
        <div className="movies__add-container"></div>
        <Footer />
      </section>
    </>
  );
};

export default SavedMovies;
