import React from 'react';
import '../AboutProject/AboutProject.css';

function AboutProject() {
    return (
       <div className="about__container">
           <h3 className="about__title">О проекте</h3>
           <div className='about__description'>
               <div className='about__description-container'>
                    <p className='about__description-title'>Дипломный проект включал 5 этапов</p>
                    <p className='about__description-paragraph'>Составление плана, работу над бэкендом, 
                    вёрстку, добавление функциональности и финальные доработки.</p>
               </div>
               <div className='about__description-container'>
                    <p className='about__description-title'>На выполнение диплома ушло 5 недель</p>
                    <p className='about__description-paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, 
                    которые нужно было соблюдать, чтобы успешно защититься.</p>
               </div>
           </div>
       </div>
      )
}
export default AboutProject