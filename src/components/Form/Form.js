import React from 'react';
import './Form.css';
import MainLogo from '../MainLogo/MainLogo';

const Form = (props) => {
  return (
    <>
      <MainLogo />
      <p className="form__welcome">{props.title}</p>
      <form className="form__table" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </>
  );
};

export default Form;
