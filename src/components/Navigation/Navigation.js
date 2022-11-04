import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import '../Navigation/Navigation.css';

const Navigation = (props) => {
  return (
    <>
      <Header>
        <div className="navigation__container">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink className="navigation__link" to="/movies">
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className="navigation__link" to="/saved-movies">
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className="navigation__link navigation__link_type_account"
                to="/profile"
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </div>
      </Header>
    </>
  );
};

export default Navigation;
