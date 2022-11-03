import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'
import MainLogo from "../MainLogo/MainLogo";


const Header = (props) => {
  return (
    <div className="header">
      <Link className="" to="/#about">
      <MainLogo/></Link>
       {props.children}
    </div>
  )
  }
export default Header