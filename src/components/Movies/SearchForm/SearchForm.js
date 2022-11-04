import React from 'react';
import '../SearchForm/SearchForm.css';

const SearchForm = () => {
  return (
    <>
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          name="text"
          placeholder="Фильм"
        ></input>
        <button className="search-form__button" aria-label="Искать"></button>
      </div>
    </>
  );
};

export default SearchForm;
