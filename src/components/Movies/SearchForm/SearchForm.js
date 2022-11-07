import React from 'react';
import '../SearchForm/SearchForm.css';

const SearchForm = () => {
  return (
    <>
      <div className="search-form__container">
        <div className="search-form__bar">
          <div className="search-form__icon"></div>
          <input
            className="search-form__input"
            type="text"
            name="text"
            placeholder="Фильм"
          ></input>
          <button className="search-form__button" aria-label="Искать"></button>
          <div className="search-form__stroke"></div>
          <div className="search-form__checkbox">
            <input
              type="checkbox"
              className="search-form__checkbox-toggle-button"
              id="toggle-button"
            />
            <label
              className="search-form__checkbox-rounded"
              htmlFor="toggle-button"
            />
          </div>
          <div className="search-form__shorts">Короткометражки</div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
