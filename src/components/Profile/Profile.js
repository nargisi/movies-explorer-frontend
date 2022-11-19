import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Navigation from '../Navigation/Navigation';
import '../Profile/Profile.css';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mainApi
      .updateProfile({ email, name })
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: res.data.name,
          email: res.data.email,
        });
        setMessage('Данные успешно изменены!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    history.push('/');
    setCurrentUser(null);
  };

  return (
    <>
      <Navigation />
      <section className="profile__container">
        <div className="profile">
          <p className="profile__welcome">Привет, {currentUser.name}</p>
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__form-input">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                required
                className="profile__input"
                id="name"
                name="name"
                value={name}
                type="text"
                onChange={handleChangeName}
              ></input>
            </div>
            <div className="profile__form-input">
              <label className="profile__label" htmlFor="E-mail">
                E-mail
              </label>
              <input
                className="profile__input"
                required
                id="email"
                name="email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
              ></input>
            </div>
            <span className="profile__message">{message}</span>
            <div className="profile__sign">
              <button type="submit" className="profile__submit">
                Редактировать
              </button>
              <button className="profile__exit" onClick={handleLogOut}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
