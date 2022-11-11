import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import '../SearchForm/SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form__container">
      <FilterCheckBox className="filter-check-box__mobile" />
      <form className="search-form__bar">
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          type="text"
          name="text"
          placeholder="Фильм"
          required
        ></input>
        <button className="search-form__button" aria-label="Искать"></button>
        <div className="search-form__stroke"></div>
        <FilterCheckBox className="filter-check-box__normal" />
      </form>
    </div>
  );
};

export default SearchForm;
