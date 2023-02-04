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
      <NetflixInput placeholder="Email"/>
      <NetflixInput placeholder="Password" />
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
  root: {},
}));

export default SignUp;
