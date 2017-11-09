import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './container/App';
import Working from './container/Working';
import Day from './container/Day';
import Week from './container/Week';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/Day" component={ Day }/>
        <Route exact path="/Week" component={ Week }/>
        <Route exact path="/Working" component={ Working } />
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
