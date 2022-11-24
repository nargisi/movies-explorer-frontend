import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Route>
      {() =>
        currentUser !== null ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;
