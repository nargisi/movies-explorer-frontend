import React from 'react';
import { Link } from 'react-router-dom';
import './MainLogo.css';
import Logo from '../../images/Logo.svg';

const MainLogo = () => {
  return (
    <Link to="/">
      <img className="logo" src={Logo} alt="Логотип" />
    </Link>
  );
};

export default MainLogo;
