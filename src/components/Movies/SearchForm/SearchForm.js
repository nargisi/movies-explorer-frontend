import React from 'react';
import { useForm } from 'react-hook-form';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import '../SearchForm/SearchForm.css';

const SearchForm = (props) => {
  const { onSubmit, onlyShort, setOnlyShort } = props;

  const defaultValues = {
    searchValue: localStorage.getItem('requestText') || '',
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ defaultValues });

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
            required: 'Нужно ввести ключевое слово',
          })}
        />
        <div className="search-form__error">
          {errors?.searchValue && (
            <p className="input__error">
              {errors?.searchValue?.message || 'Ошибка!'}
            </p>
          )}
        </div>
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
