import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import '../App/App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Preloader from '../Movies/Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute';
import ForbiddenRoute from '../ForbiddenRoute';
import { useHistory } from 'react-router-dom';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [shouldFetchUserData, setShouldFetchUserData] = useState(
    localStorage.getItem('jwt') ? true : false
  );
  const history = useHistory();

  useEffect(() => {
    const handleInvalidateToken = (event) => {
      if (currentUser) {
        localStorage.clear();
        setCurrentUser(null);
        history.push('/');
      }
    };
    window.addEventListener('invalidate_token', handleInvalidateToken);

    return () =>
      window.removeEventListener('invalidate_token', handleInvalidateToken);
  }, [currentUser, history]);

  useEffect(() => {
    if (shouldFetchUserData) {
      mainApi
        .getAboutUser()
        .then((res) => {
          if (res) {
            setCurrentUser(res.data);
            setShouldFetchUserData(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [shouldFetchUserData]);

  if (shouldFetchUserData && !currentUser) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        setShouldFetchUserData: setShouldFetchUserData,
      }}
    >
      <div className="page">
        <Switch>
          <ForbiddenRoute component={Login} path="/signin" />
          <ForbiddenRoute component={Register} path="/signup" />
          <ProtectedRoute component={Profile} path="/profile" />
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute component={Movies} path="/movies" />
          <ProtectedRoute component={SavedMovies} path="/saved-movies" />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
