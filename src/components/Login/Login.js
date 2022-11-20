import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth.js';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import Input from '../Input/Input';

const Login = ({ fetchUserData }) => {
  const { setShouldFetchUserData } = useContext(CurrentUserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .autorise(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setShouldFetchUserData(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log('signin err!!!!!!!!!!!!!!!!!!!!!', err);
        setError('Что-то пошло не так! Попробуйте еще раз!');
      });
  };

  return (
    <section className="register__container">
      <div className="register">
        <Form title="Рады видеть!" onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            label="Пароль"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className="form__error">{error}</span>
          <div className="register__submit-container">
            <FormSubmit
              link="/signup"
              title="Войти"
              question="Ещё не зарегистрированы? "
              text="Регистрация"
            />
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
