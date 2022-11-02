import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/Logo.svg'
import '../Header/Header.css'


const Header = (props) => {
  return (
    <div className="header">
      <Link className="" to="/#about">
      <img className="header__logo" src={Logo} alt="Логотип"/></Link>
       {props.children}
    </div>
  )
  }
export default Header