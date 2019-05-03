import React, { Component } from 'react';
import Header from './componete/Header'
import Footer from './componete/Footer'
import  Body from './componete/body'
import Card from './componete/Card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Header/>*/}
          <Card/>
          {/*<Body/>*/}
          {/*<Footer/>*/}
      </div>
    );
  }
}

export default App;
