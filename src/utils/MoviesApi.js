import { API_MOVIES_CONFIG } from './constants';

class Movies_Api {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    console.log('res', res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseURL}`, {
      headers: { ...this._headers },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err);
      });
  }
}

const moviesApi = new Movies_Api(API_MOVIES_CONFIG);

export default moviesApi;
