import React from 'react';
import '../AboutProject/AboutProject.css';
import Line from '../Line/Line'

const AboutProject = () => {
    return (
        <>
       <div id="about" className="about__container">
           <Line>О проекте</Line>
           <div className="about__description">
               <div className="about__description-container">
                    <p className="about__description-title">Дипломный проект включал 5 этапов</p>
                    <p className="about__description-paragraph">Составление плана, работу над бэкендом, 
                    вёрстку, добавление функциональности и финальные доработки.</p>
               </div>
               <div className="about__description-container">
                    <p className="about__description-title">На выполнение диплома ушло 5 недель</p>
                    <p className="about__description-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, 
                    которые нужно было соблюдать, чтобы успешно защититься.</p>
               </div>
           </div>
           <div className="about__timing">
               <div className="about__timing-week">1 неделя</div>
               <div className="about__timing-weeks">4 недели</div>
           </div>
           <div className="about__timing about__timing_theme-white">
               <div className="about__timing-week about__timing-week_theme-white">Back-end</div>
               <div className="about__timing-week about__timing-week_theme-white">Front-end</div>
           </div>
       </div>
       </>
      )
}
export default AboutProject