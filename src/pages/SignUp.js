import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((authUser) => navigate('/'))
    .catch((err) => alert(err.message))
  }


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => navigate('/'))
    .catch((err) => alert(err.message))
  }


  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sign In
      </Typography>
      <form className={classes.form}>
        <NetflixInput
          value={email}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={classes.email}
        />
        <NetflixInput
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={classes.password}
        />
        <NetflixButton wide="medium" type="submit" onClick={signIn}>
          Sign In
        </NetflixButton>

        <Typography variant="subtitle2">
          New to Netflix? {"  "}
          <span className={classes.signUpLink} onClick={register}>Sign Up now.{' '} </span>
        </Typography>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: "16px",
  },
  password: {
    marginBottom: "32px",
  },
  signUpLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default SignUp;
