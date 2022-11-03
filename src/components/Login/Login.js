import React from "react";
import Form from "../Form/Form";
import FormSubmit from "../FormSubmit/FormSubmit";
import Input from "../Input/Input";

const Login = () => {
  return (
    <>
      <div className="register">
      <Form title="Рады видеть!">
        <Input label="E-mail" name="email"  type="email"/> 
        <Input label="Пароль" name="password"  type="password"/>  
        </Form>
      <FormSubmit link="/signup" title="Войти" question="Ещё не зарегистрированы? " text="Регистрация"/>
      </div>
    </>
  );
  }
export default Login