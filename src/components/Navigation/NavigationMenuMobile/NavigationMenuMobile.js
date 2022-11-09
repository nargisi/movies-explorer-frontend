import React from 'react';
import './NavigationMenuMobile.css';
import { NavLink } from 'react-router-dom';

const NavigationMenuMobile = () => {
  return (
    <div className="navigation__menu-mobile-container">
      <ul className="navigation__menu-mobile">
        <li className="navigation__item-mobile">
          <NavLink className="navigation__link-mobile" to="/">
            Главная
          </NavLink>
        </li>
        <li className="navigation__item-mobile">
          <NavLink className="navigation__link-mobile" to="/movies">
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item-mobile">
          <NavLink className="navigation__link-mobile" to="/saved-movies">
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
      <span className="navigation__account-mobile">
        <NavLink
          className="navigation__link-desktop navigation__link-desktop_type_account"
          to="/profile"
        >
          Аккаунт
        </NavLink>
      </span>
    </div>
  );
};

export default NavigationMenuMobile;
