import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Home, Results } from './components';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
  }
}

const app = document.querySelector('#app');

ReactDom.render(
  <App />,
  app,
  () => console.log('app rendered'),
);
