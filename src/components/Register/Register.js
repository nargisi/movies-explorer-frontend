import React from 'react';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import Input from '../Input/Input';
import '../Register/Register.css';

const Register = () => {
  return (
    <section className="register__container">
      <div className="register">
        <Form title="Добро пожаловать!">
          <Input
            label="Имя"
            name="Имя"
            type="text"
            required
            minlength="2"
            maxlength="30"
            value="Анастасия"
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            required
            value="pochta@yandex.ru"
          />
          <Input
            className="input__error"
            label="Пароль"
            name="password"
            type="password"
            required
            value="1234?67"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <span className="form__error">Что-то пошло не так</span>
        </Form>
        <FormSubmit
          link="/signin"
          title="Зарегистрироваться"
          question="Уже зарегистрированы? "
          text="Войти"
        />
      </div>
    </section>
  );
};

export default Register;
