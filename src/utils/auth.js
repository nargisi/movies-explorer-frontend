import { API_MAIN_CONFIG } from './constants';
const BASE_URL = API_MAIN_CONFIG.baseURL;

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error('Bad response from server');
      }
      if (res.status === 409) {
        throw new Error('Такой пользователь уже существует');
      }
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

export const autorise = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Неправильная почта или пароль');
      }
      return res.json();
    })
    .then((res) => {
      if (res) {
        console.log('token', res.data);
        localStorage.setItem('jwt', res.data);
        return res.data;
      }
    });
};

// export const getContent = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => {
//       if (res.status === 401) {
//         throw new Error('Invalid token');
//       }
//       return res.json();
//     })
//     .then((data) => data);
// };
