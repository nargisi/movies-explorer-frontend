import React from 'react';
import '../Header/Header.css';
import MainLogo from '../MainLogo/MainLogo';

const Header = (props) => {
  return (
    <header className="header">
      <MainLogo />
      {props.children}
    </header>
  );
};
export default Header;
