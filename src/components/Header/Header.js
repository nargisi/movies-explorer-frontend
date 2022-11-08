import React from 'react';
import '../Header/Header.css';
import MainLogo from '../MainLogo/MainLogo';

const Header = (props) => {
  return (
    <div className="header">
      <MainLogo />
      {props.children}
    </div>
  );
};
export default Header;
