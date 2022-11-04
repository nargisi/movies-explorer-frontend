import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';
import Film1 from '../../../images/film1.jpg';
import Film2 from '../../../images/film2.jpg';
import Film3 from '../../../images/film3.jpg';
import Film4 from '../../../images/film4.jpg';
import Film5 from '../../../images/film5.jpg';
import Film6 from '../../../images/film6.jpg';
import Film7 from '../../../images/film7.jpg';
import Film8 from '../../../images/film8.jpg';
import Film9 from '../../../images/film9.jpg';
import Film10 from '../../../images/film10.jpg';
import Film11 from '../../../images/film11.jpg';
import Film12 from '../../../images/film12.jpg';
import Film13 from '../../../images/film13.jpg';
import Film14 from '../../../images/film14.jpg';
import Film15 from '../../../images/film15.jpg';
import Film16 from '../../../images/film16.jpg';

const MoviesCardList = () => {
  return (
    <>
      <div className="movies-card-list__container">
        <ul className="movies-card-list__box">
          <MoviesCard src={Film1} title="33 слова о дизайне" />
          <MoviesCard src={Film2} title="Киноальманах «100 лет дизайна»" />
          <MoviesCard src={Film3} title="В погоне за Бенкси" />
          <MoviesCard src={Film4} title="Баския: Взрыв реальности" />
          <MoviesCard src={Film5} title="Бег это свобода" />
          <MoviesCard src={Film6} title="Книготорговцы" />
          <MoviesCard src={Film7} title="Когда я думаю о Германии ночью" />
          <MoviesCard
            src={Film8}
            title="Gimme Danger: История Игги и The Stooges"
          />
          <MoviesCard src={Film9} title="Дженис: Маленькая девочка грустит" />
          <MoviesCard src={Film10} title="Соберись перед прыжком" />
          <MoviesCard src={Film11} title="Пи Джей Харви: A dog called money" />
          <MoviesCard src={Film12} title="По волнам: Искусство звука в кино" />
          <MoviesCard src={Film13} title="Рудбой" />
          <MoviesCard src={Film14} title="Скейт — кухня" />
          <MoviesCard src={Film15} title="Война искусств" />
          <MoviesCard src={Film16} title="Зона" />
        </ul>
      </div>
    </>
  );
};

export default MoviesCardList;
