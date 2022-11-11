import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../Header/Header';
import MainImage from '../../../images/Main_image.svg';
import '../Promo/Promo.css';

const Promo = () => {
  return (
    <section className="promo__container">
      <div className="promo__box">
        <img className="promo__image" src={MainImage} alt="Земля" />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <h3 className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h3>
        <a className="promo__link" href="#about">
          Узнать больше
        </a>
      </div>
    </section>
  );
};
export default Promo;
