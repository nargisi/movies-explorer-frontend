import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  return (
    <>
      <div className="register">
      <Header/>
        <p className="register__welcome">Рады видеть!</p>
        <form className="register__form">
          <input
            className="register__input"
            id="email"
            name="email"
            value=""
            type="email"
            placeholder="E-mail"
            onChange={()=> {}}
          />
          <input
            className="register__input"
            id="password"
            name="password"
            value=""
            type="password"
            placeholder="Пароль"
            onChange={()=> {}}
          />
          <button type="submit" className="register__submit">
            Войти
          </button>
        </form>
        <div className="register__signin">
          <Link to="/signup" className="register__login-link">
            Уже зарегистрированы? <span className="register__login-exit">Регистрация</span>
          </Link>
        </div>
      </div>
    </>
  );
  }
export default Login