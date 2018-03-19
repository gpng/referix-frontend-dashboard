import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';

// routing
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';

// redux store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// local imports
import indexRoutes from 'routes';
import reducers from 'reducers';
import { jwt } from 'actions/middlewares';
import { AUTHENTICATED, UNAUTHENTICATED } from 'actions/types';
import { Landing } from 'containers/Landing';

// style imports
import 'assets/css/material-dashboard-react.css';
import 'react-flexview/lib/flexView.css';

// build middleware for intercepting and dispatching navigation actions
const hist = createBrowserHistory();
const navMiddleware = routerMiddleware(hist);

// create redux store
const store = createStore(
  reducers,
  {},
  applyMiddleware(jwt, reduxThunk, navMiddleware)
);

// check if refresh token in local storage - authenticated or not
const refreshToken = localStorage.getItem('refresh_token');
if (refreshToken) {
  store.dispatch({ type: AUTHENTICATED });
} else {
  store.dispatch({ type: UNAUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={1500} />
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Landing} />
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
