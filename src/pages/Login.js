import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../img/logo-netflix.png";
import herobanner from '../img/hero-banner2.jpg'
import { Button } from "@mui/material";
import { NetflixButton } from "../styled/styledcomponents";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    backgroundImage: `url(${herobanner})`,
    objectFit: 'contain',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  logo: {
    position: 'fixed',
    top: 0,
    left: 20,
    width: '150px',
    cursor: 'pointer'
  },
  session: {
    position: 'fixed',
    zIndex: 15,
    right: 20,
    top: 20
  },
}));

export default Login;
