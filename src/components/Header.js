import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../img/logo-netflix.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [ show, setShow ] = useState(false);
  const hideHeader = () => {
    if(window.screenY > 100){
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => { 
    window.addEventListener('scroll', hideHeader)
  }, [])

  return (
    <AppBar position="sticky" elevation={0} className={classes.root}>
      <Toolbar className={classes.toolbar}>

        <IconButton onClick={() => navigate('/')}>
        <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>

        <Avatar variant="square" style={{cursor: 'pointer'}} onClick={() => navigate('/profile')}/>
      </Toolbar>
    </AppBar>
      );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    top: 0,
    left: 0,
    right: 0
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  


  
}));

export default Header;
