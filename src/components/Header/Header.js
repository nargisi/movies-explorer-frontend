import React from "react";
import Logo from '../../images/Logo.svg'
import '../Header/Header.css'

function Header(props) {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Логотип"/>
       {props.children}
    </div>
  )
  }
export default Header