import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import '../SearchForm/SearchForm.css';

const SearchForm = (props) => {
  const { handleSubmit, searchValue, setSearchValue, onlyShort, setOnlyShort } =
    props;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="search-form__container">
      <FilterCheckBox
        className="filter-check-box__mobile"
        onlyShort={onlyShort}
        setOnlyShort={setOnlyShort}
      />
      <form className="search-form__bar" onSubmit={handleSubmit}>
        <div className="search-form__icon"></div>
        <input
          id="search-form__input"
          className="search-form__input"
          type="text"
          value={searchValue}
          name="text"
          placeholder="Фильм"
          required
          onChange={handleChange}
        ></input>
        <span id="search-form__input-error"></span>
        <button
          className="search-form__button"
          aria-label="Искать"
          type="submit"
        ></button>
        <div className="search-form__stroke"></div>
        <FilterCheckBox
          className="filter-check-box__normal"
          onlyShort={onlyShort}
          setOnlyShort={setOnlyShort}
        />
      </form>
    </div>
  );
};

export default SearchForm;
