import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Filtro extends Component {
  render(){
    return(
      <div>
        <header className="Filtro">
          <h2 className="Filtro-title">¿Estás buscando alguna prenda en específico?</h2>
        </header>
          <div>
            <Button className= "BotonSi" variant="contained" color="primary">
            <a href="/APIcomponent">Sí</a>
            </Button>
            <Button className= "BotonNo" variant="contained" color="secondary">
            <a href="/shop"> No, sólo quiero ver</a>
            </Button>
          </div>
      </div>
    );
  }
}
export default Filtro;
