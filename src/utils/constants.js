export const API_MAIN_CONFIG = {
  baseURL: 'https://api.movies.nargisi.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API_MOVIES_CONFIG = {
  baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

// export const message =
//   'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const getMoviesRenderParams = () => {
  const width = window.innerWidth;
  if (width > 1022) {
    return { moviesInRow: 4, step: 4, maxRows: 4 };
  }
  if (width > 767) {
    return { moviesInRow: 2, step: 2, maxRows: 4 };
  } else {
    return { moviesInRow: 1, step: 2, maxRows: 4 };
  }
};

export const getSavedMoviesRenderParams = () => {
  const width = window.innerWidth;
  if (width > 1022) {
    return { moviesInRow: 4, maxRows: 4 };
  }
  if (width > 767) {
    return { moviesInRow: 2, maxRows: 4 };
  } else {
    return { moviesInRow: 1, maxRows: 4 };
  }
};
