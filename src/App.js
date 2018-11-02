import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './routes.js';

import Header from './component/header/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
        <Header/>
      </div>
    );
  }
}

export default App;
