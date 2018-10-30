import React, { Component, Fragment } from 'react';
import Routes from './routes';
import { Header } from './components/layouts';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
