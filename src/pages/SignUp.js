import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";

const SignUp = () => {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Typography variant="h5" align="left">
        Sign In
    </Typography>
    <form className={classes.form}>
      <NetflixInput placeholder="Email" className={classes.email} />
      <NetflixInput placeholder="Password" className={classes.password} />
      <NetflixButton wide='medium' radius>Sign In</NetflixButton>

      <Typography variant="subtitle2">
        New to Netflix? {' '}
        <span className={classes.signUpLink} >
          Sign Up now. {' '}
        </span>
      </Typography>
    </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '350px',
    width: '20rem',
    height: '25rem',
    background: 'rgba(0,0,0,0.65)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  
}));

export default SignUp;
