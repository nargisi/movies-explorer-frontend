import React from 'react';
import './NavigationMenuDesktop.css';
import { NavLink } from 'react-router-dom';

const NavigationMenuDesktop = () => {
  return (
    <ul className="navigation__menu-desktop">
      <li className="navigation__item-desktop">
        <NavLink className="navigation__link-desktop" to="/movies">
          Фильмы
        </NavLink>
      </li>
      <li className="navigation__item-desktop">
        <NavLink className="navigation__link-desktop" to="/saved-movies">
          Сохраненные фильмы
        </NavLink>
      </li>
      <li className="navigation__item-desktop">
        <NavLink
          className="navigation__link-desktop navigation__link-desktop_type_account"
          to="/profile"
        >
          Аккаунт
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationMenuDesktop;
