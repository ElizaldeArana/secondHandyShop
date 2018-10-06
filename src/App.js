import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageHeader from './HeaderComponent'
import BodyImage from './imageComponent'
import DialogueBox from './questionsPage'
import ButtonAppBar from './componenteMenu'
import ParrafoQuienesSomos from './quienesSomos'
import Filtro from'./FiltroComponent'
import PermanentDrawer from './shop'
import './App.css';
import {Switch} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
          <PageHeader></PageHeader>
          <ButtonAppBar></ButtonAppBar>
        <Router>
          <div>
              <Route exact path= "/" component= {BodyImage}/>
              <Route path="/FiltroComponent" component={Filtro}/>
              <Route path="/quienesSomos" component={ParrafoQuienesSomos}/>
              <Route path="/shop" component ={PermanentDrawer}/>
              
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
