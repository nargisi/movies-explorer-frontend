import React from 'react';
import '../Techs/Techs.css'
import Line from '../Line/Line'

const Techs = () => {
    return (
        <>
       <div className="techs__container">
            <Line>Технологии</Line>
           <h2 className='techs__title'>7 технологий</h2>
           <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, 
           которые применили в дипломном проекте.</p>
          <ul className='techs__container-grid'>
              <li className='techs__container-grid__info'>HTML</li>
              <li className='techs__container-grid__info'>CSS</li>
              <li className='techs__container-grid__info'>JS</li>
              <li className='techs__container-grid__info'>React</li>
              <li className='techs__container-grid__info'>Express.js</li>
              <li className='techs__container-grid__info'>mongoDB</li>
          </ul>
       </div>
       </>
      )
}
export default Techs