import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth.js';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';

const Login = () => {
  const { setShouldFetchUserData } = useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const history = useHistory();

  const [error, setError] = useState('');

  const onSubmit = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .autorise(email, password)
      .then(() => {
        setShouldFetchUserData(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        setError('Что-то пошло не так! Попробуйте еще раз!');
      });
  };

  return (
    <section className="register__container">
      <div className="register">
        <Form title="Рады видеть!" onSubmit={handleSubmit(onSubmit)} novalidate>
          <Input
            type="email"
            required="Поле обязательно к заполнению!"
            label="E-mail"
            name="email"
            pattern={{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Неверный E-mail!',
            }}
            register={register}
          />
          <div className="input__error">
            {errors?.email && (
              <p className="input__error">
                {errors?.email?.message || 'Ошибка!'}
              </p>
            )}
          </div>
          <Input
            type="password"
            label="Пароль"
            name="password"
            required="Поле обязательно к заполнению!"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            register={register}
          />
          <div className="input__error">
            {errors?.password && (
              <p className="input__error">
                {errors?.password?.message || 'Ошибка!'}
              </p>
            )}
          </div>
          <span className="form__error">{error}</span>
          <div className="register__submit-container">
            <FormSubmit
              link="/signup"
              title="Войти"
              question="Ещё не зарегистрированы? "
              text="Регистрация"
              disabled={!isValid}
            />
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
