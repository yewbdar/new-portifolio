import React, { Component } from 'react';
import Header from './componete/Header'
import Footer from './componete/Footer'
import  Body from './componete/body'
import Error from './componete/Error'
import './App.css';
import {BrowserRouter, Route , Switch} from "react-router-dom";
import HeaderCard from './componete/HeaderCard'
import BodyCard from './componete/BodyCard'
import PortFolioCard from './componete/PortfolioCard'
import Contact from './componete/contact'
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>

              <HeaderCard/>
              <Route path='/' component={BodyCard} exact/>
              <Route path='/portfolio' component={PortFolioCard}/>
              <Route path='/about' component={BodyCard}/>
              <Route path='/contact' component={Contact}/>
              {/*<Route component={Error}/>*/}
              <Footer/>

          </BrowserRouter>
      </div>
    );
  }
}

export default App;
