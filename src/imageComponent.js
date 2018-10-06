import React, { Component } from 'react';
import logo from './punkImage.jpg';
import './BodyImage.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class BodyImage extends Component {
  render(){
    return(

      <div>

        <div className="App-Image">
          <img src={logo} className="Image-logo" alt="logo" />
        </div>

        <div>
          <Button className= "BotondeComprar" variant="contained" color="secondary">
            <a href="/FiltroComponent">Empezar a comprar</a>
          </Button>
        </div>

      </div>
        );
      }
}

export default BodyImage;
