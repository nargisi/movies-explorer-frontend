import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../Register/Register.css";

const Register = () => {
    return (
        <>
          <div className="register">
          <Header/>
            <p className="register__welcome">Добро пожаловать!</p>
            <form className="register__form">
            <input
                className="register__input"
                id="name"
                name="name"
                value=""
                type="text"
                placeholder="Имя"
                onChange={()=> {}}
              />
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
                Зарегистрироваться
              </button>
            </form>
            <div className="register__signin">
              <Link to="/signin" className="register__login-link">
                Уже зарегистрированы? <span className="register__login-exit">Войти</span>
              </Link>
            </div>
          </div>
        </>
      );
    };

export default Register