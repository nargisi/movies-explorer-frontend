import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { useForm } from 'react-hook-form';
import Navigation from '../Navigation/Navigation';
import '../Profile/Profile.css';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const defaultValues = {
    name: currentUser.name,
    email: currentUser.email,
  };

  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({}, { keepValues: true });
    }
  }, [isSubmitSuccessful, reset]);

  const [message, setMessage] = useState('');

  const history = useHistory();

  const onSubmit = ({ email, name }) => {
    mainApi
      .updateProfile({ email, name })
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: res.data.name,
          email: res.data.email,
        });
        setMessage('Данные успешно изменены!');
        setTimeout(() => {
          setMessage('');
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    localStorage.clear();
    history.push('/');
    setCurrentUser(null);
  };

  return (
    <>
      <Navigation />
      <section className="profile__container">
        <div className="profile">
          <p className="profile__welcome">Привет, {currentUser.name}</p>
          <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="profile__form-input">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__input"
                type="text"
                {...register('name', {
                  required: 'Это обязательное поле!',
                })}
              />
            </div>
            <div className="profile__error">
              {errors?.name && (
                <p className="input__error">
                  {errors?.name?.message || 'Ошибка!'}
                </p>
              )}
            </div>
            <div className="profile__form-input profile__form-input_type-last">
              <label className="profile__label" htmlFor="E-mail">
                E-mail
              </label>
              <input
                className="profile__input"
                type="email"
                {...register('email', {
                  required: 'Это обязательное поле!',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Неверный E-mail!',
                  },
                })}
              />
            </div>
            <div className="profile__error">
              {errors?.email && (
                <p className="input__error">
                  {errors?.email?.message || 'Ошибка!'}
                </p>
              )}
            </div>
            <p className="profile__message">{message}</p>
            <div className="profile__sign">
              <button
                type="submit"
                className="profile__submit"
                disabled={!isDirty || !isValid}
              >
                Редактировать
              </button>
              <button className="profile__exit" onClick={handleLogOut}>
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
