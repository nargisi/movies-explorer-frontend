import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <section className="header__container">
        <Header>
          <div className="header__links">
            <Link className="header__link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__link-button" to="/signin">
              Войти
            </Link>
          </div>
        </Header>
      </section>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};
export default Main;
