import React from "react";
import {Link} from 'react-router-dom'
import Header from '../../Header/Header'
import MainImage from '../../../images/Main_image.svg'
import '../Promo/Promo.css'


function Promo() {
    return (
        <>
        <div className="promo__container">
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
            <div className="promo__box">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <h3 className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
                <Link className="promo__link"to="/">Узнать больше</Link>
                <img className="promo__image" src={MainImage} alt='Земля'/>
            </div>
        </div>
        </>
     
    )
    }
  export default Promo