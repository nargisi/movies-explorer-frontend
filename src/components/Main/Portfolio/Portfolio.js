import React from 'react';
import '../Portfolio/Portfolio.css'
import Line from '../Line/Line'
import MainImage from '../../../images/Main_image.svg';

function Portfolio() {
    return (
        <>
        <div className='portfolio__container'>
            <Line>Студент</Line>
            <div className="portfolio__box">
                <h2 className="portfolio__title">Анастасия</h2>
                <h3 className="portfolio__subtitle">Фронтренд-разработчик</h3>
                <p className="portfolio__info">Я родилась и живу в городе Минске, 
                закончила факультет финансов БГЭУ. У меня есть муж и 2 сына.
                Я люблю читать, шить, слушать музыку, смотреть фильмы на английском языке, 
                а ещё увлекаюсь силовым фитесом. Недавно начала кодить. 
                В данный момент прохожу курсы по веб-разработке и планирую пройти курсы по
                английскому языку уровня В2. После этого буду искать работу или стажировку.</p>
                <p className='portfolio__tech'>Github</p>
                <p className='portfolio__text'>Портфолио</p>
                <img className="promo__image" src={MainImage} alt='Изображение студента'/>
            </div>
        </div>
        </>
    )

}

export default Portfolio