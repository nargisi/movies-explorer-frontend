import React, { useContext } from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Main = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      {currentUser === null ? (
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
      ) : (
        <Navigation />
      )}
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
