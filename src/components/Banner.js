import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Baanner from "../img/banner.jpeg";

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component='h1' >
          Movie Title
        </Typography>
        <div className={classes.buttons}>
        <Button>Play</Button>
        <Button>My List</Button>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Baanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: '#fff'
  },
  buttons: {
    '& button': {
      cursor: 'pointer',
      // padding: theme.spacing(1,4,1,4),
      color: '#fff',
      fontWeight: 700,
      borderRadius: '5px',
      marginRight: '1rem',
      backgroundColor: 'rgba(51, 51, 51, 0.5)'
    },
    '& button:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6'
    }
  }
}));

export default Banner;
