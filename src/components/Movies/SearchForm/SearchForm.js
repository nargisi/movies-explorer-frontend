import React from 'react';
import { useForm } from 'react-hook-form';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import '../SearchForm/SearchForm.css';

const SearchForm = (props) => {
  const { onSubmit, onlyShort, setOnlyShort, defaultSearchValue } = props;

  const defaultValues = {
    searchValue: defaultSearchValue || '',
  };
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <div className="search-form__container">
      <FilterCheckBox
        className="filter-check-box__mobile"
        onlyShort={onlyShort}
        setOnlyShort={setOnlyShort}
      />
      <form className="search-form__bar" onSubmit={handleSubmit(onSubmit)}>
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          {...register('searchValue', {
            // required: 'Нужно ввести ключевое слово',
          })}
        />
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
