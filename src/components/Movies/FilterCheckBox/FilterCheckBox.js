import React from 'react';
import '../FilterCheckBox/FilterCheckBox.css';

const FilterCheckBox = ({ className }) => {
  return (
    <div className={`filter-check-box__container ${className}`}>
      <div className="filter-check-box__tumb">
        <input
          type="checkbox"
          className="filter-check-box__toggle-button"
          id="toggle-button"
        />
        <label className="filter-check-box__rounded" htmlFor="toggle-button" />
      </div>
      <div className="filter-check-box__shorts">Короткометражки</div>
    </div>
  );
};

export default FilterCheckBox;
