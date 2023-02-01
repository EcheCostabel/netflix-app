import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../img/logo-netflix.png'
import React from 'react'

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <img src={logo} alt='logo' className={classes.logo} />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}));

export default Header