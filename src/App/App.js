import { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { LoginPage } from '../LoginPage/LoginPage';

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
            {
              alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Redirect from="*" to="/login" />
              </Switch>
            </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
