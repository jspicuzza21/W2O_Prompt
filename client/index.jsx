import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './components';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

const app = document.querySelector('#app');

ReactDom.render(
  <App />,
  app,
  () => console.log('app rendered'),
);
