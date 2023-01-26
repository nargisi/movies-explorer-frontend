import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ForbiddenRoute = ({ component: Component, ...props }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Route>
      {() =>
        currentUser !== null ? <Redirect to="/" /> : <Component {...props} />
      }
    </Route>
  );
};

export default ForbiddenRoute;
