import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB
const accent2 = purple.A200; // #E040FB (alternative method)

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 5,
    marginRight: 20,
  },
  appbar: {
    color: 'purple'
  }
};

const appBarStyles = {
  background: 'purple',
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={appBarStyles}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <FilterVintageIcon/>
          </IconButton>
          <Button color="inherit"><a href="/loginPage">Login</a></Button>
          <Button color="inherit"><a href="/quienesSomos">Quiénes somos</a></Button>
          <Button color="inherit"><a href="/paginadeContacto">Contacto</a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
