import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth.js';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import Input from '../Input/Input';
import '../Register/Register.css';

const Register = (/* { onStatusChange } */) => {
  const { setShouldFetchUserData } = useContext(CurrentUserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .register(name, email, password)
      .then((res) => {
        return auth.autorise(email, password);
      })
      .then(() => {
        setShouldFetchUserData(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <section className="register__container">
      <div className="register">
        <Form title="Добро пожаловать!" onSubmit={handleSubmit}>
          <Input
            label="Имя"
            name="Имя"
            type="text"
            required
            minlength="2"
            maxlength="30"
            value={name}
            onChange={handleChangeName}
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
          <Input
            className="input__error"
            label="Пароль"
            name="password"
            type="password"
            required
            value={password}
            onChange={handleChangePassword}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <span className="form__error">{error}</span>
          <FormSubmit
            link="/signin"
            title="Зарегистрироваться"
            question="Уже зарегистрированы? "
            text="Войти"
          />
        </Form>
      </div>
    </section>
  );
};

export default Register;
