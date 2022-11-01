import React from "react";
import '../Footer/Footer.css';

function Footer() {
    return (
        <div className="footer__container">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__box">
                <p className="footer__text">© 2022</p>
                <div className="footer__icons">
                    <p className="footer__icon">Яндекс.Практикум</p>
                    <p className="footer__icon">Github</p>
                </div>
            </div>
        </div>
    )
}

export default Footer