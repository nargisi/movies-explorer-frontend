import React from 'react';
import { Link } from 'react-router-dom';
import '../PageNotFound/PageNotFound.css';

const PageNotFound = () => {
  return (
    <section className="not-found__container">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="button__to-main" to="/">
        Назад
      </Link>
    </section>
  );
};

export default PageNotFound;
