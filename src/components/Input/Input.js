import React from 'react';
import '../Input/Input.css';

const Input = (props) => {
  return (
    <>
      <label className="input__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={`input ${props.className || ''}`}
        required
        id={props.name}
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
