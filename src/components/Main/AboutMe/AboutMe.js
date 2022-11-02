import React from 'react';
import '../AboutMe/AboutMe.css'
import Line from '../Line/Line'
import Student from '../../../images/student.jpg';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
    return (
        <>
        <div className='about__container'>
            <Line>Студент</Line>
            <div className="about__box">
                <div className="about__box-data">
                    <h2 className="about__title">Анастасия</h2>
                    <h3 className="about__subtitle">Фронтренд-разработчик</h3>
                    <p className="about__info">Я родилась и живу в городе Минске, 
                    закончила факультет финансов БГЭУ. У меня есть муж и 2 сына.
                    Я люблю читать, шить, слушать музыку, смотреть фильмы на английском языке, 
                    а ещё увлекаюсь силовым фитесом. Недавно начала кодить. 
                    В данный момент прохожу курсы по веб-разработке и планирую пройти курсы по
                    английскому языку уровня В2. После этого буду искать работу или стажировку.</p>
                    <p className="about__tech">Github</p>
                </div>
                <div className="about__box-photo">
                    <img className="about__image" src={Student} alt='Изображение студента'/>
                </div>
            </div>
            <Portfolio/>
        </div>
        </>
    )

}

export default AboutMe