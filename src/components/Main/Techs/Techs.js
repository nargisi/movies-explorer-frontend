import React from 'react';
import '../Techs/Techs.css';
import Line from '../Line/Line';

const Techs = () => {
  return (
    <section className="techs__container">
      <Line>Технологии</Line>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__box">
        <ul className="techs__container-list">
          <li className="techs__container-list__item">HTML</li>
          <li className="techs__container-list__item">CSS</li>
          <li className="techs__container-list__item">JS</li>
          <li className="techs__container-list__item">React</li>
          <li className="techs__container-list__item">Git</li>
          <li className="techs__container-list__item">Express.js</li>
          <li className="techs__container-list__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};
export default Techs;
