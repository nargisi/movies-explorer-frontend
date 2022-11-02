import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import '../App/App.css'

const App = () => {
  return (
    <div className="page">
      <Switch>
          <Route path="/signin">
            <Login/>
          </Route>
          <Route path="/signup">
            <Register/>
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
    </div>
  );
}

export default App; 