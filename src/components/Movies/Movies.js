import React, { useEffect, useMemo, useState } from 'react';
import { getMoviesRenderParams, ShortsDuration } from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import '../Movies/Movies.css';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  const { moviesInRow, step, maxRows } = getMoviesRenderParams();

  const [numberOfMoviesToRender, setNumberOfMoviesToRender] = useState(
    moviesInRow * maxRows
  );

  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState(
    JSON.parse(localStorage.getItem('foundMovies')) || []
  );

  const [onlyShort, setOnlyShort] = useState(
    JSON.parse(localStorage.getItem('checkboxState')) || false
  );

  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || []
  );

  const [searchIsCompleted, setSearchIsCompleted] = useState(false);

  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movies.length === 0) {
      moviesApi
        .getMovies()
        .then((moviesData) => {
          setMovies(moviesData);
          localStorage.setItem('movies', JSON.stringify(moviesData));
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [movies.length]);

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
    const resizeHandler = () => {
      clearTimeout(timeOutFunctionId);
      timeOutFunctionId = setTimeout(() => {
        const { moviesInRow: moviesInRowResize, maxRows: maxRowsResize } =
          getMoviesRenderParams();
        setNumberOfMoviesToRender(moviesInRowResize * maxRowsResize);
      }, 500);
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const moviesWithLikes = useMemo(() => {
    const searchValue = localStorage.getItem('requestText');
    const moviesCollection = searchValue || onlyShort ? foundMovies : movies;
    return moviesCollection.map((movie) => {
      const savedMovie = savedMovies.find(
        (savedMovie) => movie.id === savedMovie.movieId
      );
      return {
        ...movie,
        liked: !!savedMovie,
        savedMovieId: savedMovie ? savedMovie._id : null,
      };
    });
  }, [movies, foundMovies, savedMovies, onlyShort]);

  const handleSubmit = ({ searchValue }) => {
    // setIsLoading(true);
    // setError(false);
    if (searchValue || onlyShort) {
      const foundMovies = movies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) &&
          (onlyShort ? movie.duration <= ShortsDuration : true)
      );
      setFoundMovies(foundMovies);
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    } else {
      setFoundMovies([]);
      localStorage.removeItem('foundMovies');
    }
    localStorage.setItem('requestText', searchValue);
    localStorage.setItem('checkboxState', JSON.stringify(onlyShort));

    setSearchIsCompleted(true);
  };

  const handleClickMore = () => {
    if (movies.length > numberOfMoviesToRender) {
      setNumberOfMoviesToRender((prevState) => {
        return prevState + step;
      });
    }
  };

  const handleChangeLike = (movie, liked) => {
    if (liked) {
      setSavedMovies([...savedMovies, movie]);
    } else {
      setSavedMovies(
        savedMovies.filter((savedMovie) => savedMovie._id !== movie._id)
      );
    }
  };

  let component;
  if (isLoading) {
    component = <Preloader />;
  } else if (moviesWithLikes.length) {
    component = (
      <MoviesCardList
        onLike={handleChangeLike}
        movies={moviesWithLikes.slice(0, numberOfMoviesToRender)}
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

  return (
    <>
      <Navigation />
      <section className="movies__container">
        <SearchForm
          onSubmit={handleSubmit}
          setOnlyShort={setOnlyShort}
          onlyShort={onlyShort}
          defaultSearchValue={localStorage.getItem('requestText')}
        />
        {component}
        <div className="movies__add-container">
          {moviesWithLikes.length > numberOfMoviesToRender && (
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
