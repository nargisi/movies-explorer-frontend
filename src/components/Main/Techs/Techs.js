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
          <div className='techs__container-grid'>
              <p className='techs__container-grid__info'>HTML</p>
              <p className='techs__container-grid__info'>CSS</p>
              <p className='techs__container-grid__info'>JS</p>
              <p className='techs__container-grid__info'>React</p>
              <p className='techs__container-grid__info'>Express.js</p>
              <p className='techs__container-grid__info'>mongoDB</p>
          </div>
       </div>
       </>
      )
}
export default Techs