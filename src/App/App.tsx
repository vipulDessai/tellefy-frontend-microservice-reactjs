import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { history } from '@/_helpers';
import { alertActions } from '@/_actions';
import { LoginPage } from '@/LoginPage';
import { PrivateRoute } from '@/_controllers';
import { HomePage } from '@/HomePage';
import { RegisterPage } from '@/RegisterPage';
import { RootState } from '@/_reducers';

function App() {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  });

  return (
    <>
      {
        alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export { App };
