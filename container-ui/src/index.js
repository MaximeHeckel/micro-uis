import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route, Link, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'emotion-theming';
import Red from 'ui-red';
import Blue from 'ui-blue';

const theme = {
  blue: '#007BFF'
};

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div>
          <h1>Parent Container UI</h1>
          <Link to="/">Go Home</Link>
          <Link to="/blue">Go To Blue</Link>
          <Link to="/red">Go To Red</Link>
        </div>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/blue" component={Blue} />
          <Route exact path="/red" component={Red} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
