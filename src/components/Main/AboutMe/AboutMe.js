import React from 'react';
import '../AboutMe/AboutMe.css';
import Line from '../Line/Line';
import Student from '../../../images/student.jpg';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <section className="about-me__container">
      <Line>Студент</Line>
      <div className="about-me__box">
        <div className="about-me__box-data">
          <h2 className="about-me__title">Анастасия</h2>
          <h3 className="about-me__subtitle">Фронтренд-разработчик</h3>
          <p className="about-me__info">
            Я родилась и живу в городе Минске, закончила факультет финансов
            БГЭУ. У меня есть муж и 2 сына. Я люблю читать, шить, слушать
            музыку, смотреть фильмы на английском языке, а ещё увлекаюсь силовым
            фитнесом. Недавно начала кодить. В данный момент прохожу курсы по
            веб-разработке.
          </p>
          <p className="about-me__tech">Github</p>
        </div>
        <div className="about-me__box-photo">
          <img
            className="about-me__image"
            src={Student}
            alt="Изображение студента"
          />
        </div>
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
