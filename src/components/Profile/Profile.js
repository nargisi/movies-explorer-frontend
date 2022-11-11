import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../Profile/Profile.css';

const Profile = () => {
  return (
    <>
      <Navigation />
      <section className="profile__container">
        <div className="profile">
          <p className="profile__welcome">Привет, Анастасия!</p>
          <form className="profile__form">
            <div className="profile__form-input">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                required
                className="profile__input"
                id="name"
                name="name"
                value="Анастасия"
                type="text"
                onChange={() => {}}
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
                value="pochta@yandex.ru"
                type="email"
                onChange={() => {}}
              ></input>
            </div>
          </form>
          <div className="profile__sign">
            <button type="submit" className="profile__submit">
              Редактировать
            </button>
            <Link to="/" className="profile__exit">
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
