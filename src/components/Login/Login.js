import React from 'react';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import Input from '../Input/Input';

const Login = () => {
  return (
    <section className="register__container">
      <div className="register">
        <Form title="Рады видеть!">
          <Input
            label="E-mail"
            name="email"
            type="email"
            required
            value="pochta@yandex.ru"
          />
          <Input label="Пароль" name="password" type="password" required />
        </Form>
        <div className="register__submit-container">
          <FormSubmit
            link="/signup"
            title="Войти"
            question="Ещё не зарегистрированы? "
            text="Регистрация"
          />
        </div>
      </div>
    </section>
  );
};
export default Login;
