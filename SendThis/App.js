import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './src/utils/Store';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}