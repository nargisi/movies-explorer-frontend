import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth.js';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import '../Register/Register.css';

const Register = () => {
  const { setShouldFetchUserData } = useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const history = useHistory();

  const [error, setError] = useState('');

  const onSubmit = ({ name, email, password }) => {
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
        <Form title="Добро пожаловать!" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            required="Поле обязательно к заполнению!"
            minLength={{ value: 2, message: 'Введите минимум 2 символа!' }}
            maxLength={{ value: 30, message: 'Максимум 30 символов!' }}
            label="Имя"
            name="name"
            pattern={{
              value: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
              message: 'Неверный E-mail!',
            }}
            register={register}
          />
          <div className="input__error">
            {errors?.name && (
              <p className="input__error">
                {errors?.name?.message || 'Ошибка!'}
              </p>
            )}
          </div>
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
          <FormSubmit
            link="/signin"
            title="Зарегистрироваться"
            question="Уже зарегистрированы? "
            text="Войти"
            disabled={!isValid}
          />
        </Form>
      </div>
    </section>
  );
};

export default Register;
