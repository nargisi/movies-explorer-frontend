import React, { useEffect, useState } from 'react';
import { getMoviesRenderParams } from '../../utils/constants';
import moviesApi from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  const { moviesInRow, step, maxRows } = getMoviesRenderParams();

  const [numberOfMoviesToRender, setNumberOfMoviesToRender] =
    useState(moviesInRow);

  useEffect(() => {
    let timeOutFunctionId;
    window.addEventListener('resize', () => {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(() => {
        console.log(window.innerWidth);
        const { moviesInRow: moviesInRowResize } = getMoviesRenderParams();
        setNumberOfMoviesToRender(moviesInRowResize);
      }, 500);
    });
  }, []);

  const [onlyShort, setOnlyShort] = useState(
    JSON.parse(localStorage.getItem('checkboxState')) || false
  );

  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || []
  );

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('requestText') || ''
  );

  const [searchIsCompleted, setSearchIsCompleted] = useState(false);

  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    moviesApi
      .getMovies()
      .then((moviesData) => {
        setMovies(
          moviesData.filter(
            (movie) =>
              movie.nameRU.toLowerCase().includes(searchValue) &&
              (onlyShort ? movie.duration <= 40 : true)
          )
        );
        localStorage.setItem('movies', JSON.stringify(moviesData));
        localStorage.setItem('requestText', searchValue);
        localStorage.setItem('checkboxState', JSON.stringify(onlyShort));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setSearchIsCompleted(true);
      });
  };

  const handleClickMore = () => {
    if (movies.length > numberOfMoviesToRender) {
      setNumberOfMoviesToRender((prevState) => {
        return prevState + step;
      });
    }
  };

  let component;
  if (isLoading) {
    component = <Preloader />;
  } else if (movies.length) {
    component = (
      <MoviesCardList movies={movies.slice(0, numberOfMoviesToRender)} />
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

  return (
    <>
      <Navigation />
      <section className="movies__container">
        <SearchForm
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setOnlyShort={setOnlyShort}
          onlyShort={onlyShort}
        />
        {component}
        <div className="movies__add-container">
          {movies.length > numberOfMoviesToRender &&
            numberOfMoviesToRender < maxRows * moviesInRow && (
              <button
                className="movies__add-button"
                aria-label="Еще"
                onClick={handleClickMore}
              >
                Ещё
              </button>
            )}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Movies;
