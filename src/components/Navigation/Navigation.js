import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import '../Navigation/Navigation.css';

const Navigation = (props) => {
  // const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <Header>
      <nav className="navigation__container">
        <button
          // onClick={setIsMenuVisible}
          className="navigation__hamburger"
        ></button>
        <ul className="navigation__menu">
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
      </nav>
    </Header>
  );
};

export default Navigation;
