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
import { Redirect } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import Preloader from '../Movies/Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [shouldFetchUserData, setShouldFetchUserData] = useState(
    localStorage.getItem('jwt') ? true : false
  );

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
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <ProtectedRoute component={Profile} path="/profile" />
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute component={Movies} path="/movies" />
          <ProtectedRoute component={SavedMovies} path="/saved-movies" />
          <Route exact path="/">
            {currentUser !== null ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
