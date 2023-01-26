import React from 'react';
import '../FormSubmit/FormSubmit.css';
import { Link } from 'react-router-dom';

const FormSubmit = (props) => {
  return (
    <>
      <button
        type="submit"
        className="form-submit__button"
        disabled={props.disabled}
      >
        {props.title}
      </button>
      <div className="form-submit__signin">
        <p className="form-submit__login-question">
          {props.question}
          <Link className="form-submit__login-link" to={props.link}>
            <span className="form-submit__login-exit">{props.text}</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default FormSubmit;
