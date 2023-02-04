import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import logo from "../img/logo-netflix.png";
import herobanner from '../img/hero-banner2.jpg'
import SignUp from './SignUp'
import { Button, Typography } from "@mui/material";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";

const Login = () => {

  const [ signIn, setSignIn ] = useState(true)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>

        {
          signIn ? (<SignUp />) : (
        <>
        <Typography variant="h4" gutterBottom>
          Unlimited films, TV programmes and more.
        </Typography>
        <Typography variant="h5" >
          Watch anywhere. Cancel at any time.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <div className={classes.inputBlock}>
          <NetflixInput placeholder="Email address" />
          <NetflixButton>GET STARTED</NetflixButton>
        </div>
        </>
          )
        }
        
      </div>
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
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  info: {
    color: '#fff',
    zIndex: 15,
    textAlign: 'center',
    '& h4': {
      fontWeight: 800,
    },
    '& h5': {
      fontWeight: 800
    }

  }
}));

export default Login;
