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

  //   getInitialCards() {
  //     return fetch(`${this._baseURL}/cards`, {
  //       headers: { ...this._headers, authorization: getToken() },
  //       credentials: 'include',
  //     }).then(this._checkResponse);
  //   }

  //   updateProfile({ name, job }) {
  //     return fetch(`${this._baseURL}/users/me`, {
  //       method: 'PATCH',
  //       credentials: 'include',
  //       headers: { ...this._headers, authorization: getToken() },
  //       body: JSON.stringify({ name, about: job }),
  //     }).then(this._checkResponse);
  //   }

  //   addNewCard({ place, href }) {
  //     return fetch(`${this._baseURL}/cards`, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: { ...this._headers, authorization: getToken() },
  //       body: JSON.stringify({ name: place, link: href }),
  //     }).then(this._checkResponse);
  //   }

  //   deleteOwnCard(id) {
  //     return fetch(`${this._baseURL}/cards/${id}`, {
  //       method: 'DELETE',
  //       credentials: 'include',
  //       headers: { ...this._headers, authorization: getToken() },
  //     }).then(this._checkResponse);
  //   }

  //   editUserAvatar({ avatar }) {
  //     return fetch(`${this._baseURL}/users/me/avatar`, {
  //       method: 'PATCH',
  //       credentials: 'include',
  //       headers: { ...this._headers, authorization: getToken() },
  //       body: JSON.stringify({ avatar: avatar }),
  //     }).then(this._checkResponse);
  //   }

  //   changeCardLike(id, isLiked) {
  //     return fetch(`${this._baseURL}/cards/${id}/likes`, {
  //       method: isLiked ? 'PUT' : 'DELETE',
  //       credentials: 'include',
  //       headers: { ...this._headers, authorization: getToken() },
  //     }).then(this._checkResponse);
  //   }
  // }

  // const getToken = () => {
  //   return `Bearer ${localStorage.getItem('jwt')}`;
}

const movies_api = new Movies_Api(API_MOVIES_CONFIG);

export default movies_api;
