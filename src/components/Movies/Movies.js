import React, { useState } from 'react';
import movies_api from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';

let width = window.innerWidth;
const getMoviesRenderParams = () => {
  if (width > 1022) {
    return { moviesInRow: 4, step: 4, maxRows: 4 };
  }
  if (width > 767) {
    return { moviesInRow: 2, step: 2, maxRows: 4 };
  } else {
    return { moviesInRow: 1, step: 2, maxRows: 4 };
  }
};

const Movies = () => {
  const { moviesInRow, step, maxRows } = getMoviesRenderParams();

  const [onlyShort, setOnlyShort] = useState(false);

  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [searchIsCompleted, setSearchIsCompleted] = useState(false);

  const [error, setError] = useState(false);

  const [numberOfMoviesToRender, setNumberOfMoviesToRender] =
    useState(moviesInRow);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    movies_api
      .getMovies()
      .then((moviesData) => {
        setMovies(
          moviesData.filter((movie) =>
            movie.nameRU.toLowerCase().includes(searchValue)
          )
        );
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
