import React from 'react';
import Form from '../Form/Form';
import FormSubmit from '../FormSubmit/FormSubmit';
import Input from '../Input/Input';
import '../Register/Register.css';

const Register = () => {
  return (
    <>
      <div className="register__container">
        <div className="register">
          <Form title="Добро пожаловать!">
            <Input label="Имя" name="Имя" type="text" />
            <Input label="E-mail" name="email" type="email" />
            <Input label="Пароль" name="password" type="password" />
          </Form>
          <FormSubmit
            link="/signin"
            title="Зарегистрироваться"
            question="Уже зарегистрированы? "
            text="Войти"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
