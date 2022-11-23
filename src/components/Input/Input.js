import React from 'react';
import '../Input/Input.css';

const Input = ({
  label,
  register,
  required,
  name,
  minLength,
  maxLength,
  type,
  pattern,
}) => (
  <>
    <label className="input__label" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      className="input"
      {...register(name, { required, minLength, maxLength, pattern })}
    />
  </>
);

export default Input;
