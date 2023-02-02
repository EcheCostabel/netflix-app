import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../components/Header";
import Plans from "../components/Plans";
import avatar from "../img/img-avatar.jpg";
import { NetflixButton } from "../styled/styledcomponents";
import './imgg.css'



const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edit profile</Typography>
        <div className={classes.info}>
          <img src={avatar} alt="avatar" className="imgg" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant="h6">email usuario</Typography>
              <Typography variant="h5" gutterBottom>Plans</Typography>
              <Plans cost={7.99}>Netflix Standard</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans cost={15.99}>Netflix Premium</Plans>
              <NetflixButton>Sign Out</NetflixButton>
            </div>
          </div>
        </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "880px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  info: {
    width: '80%',
    display: 'flex',
    '& img': {
      height: '100px',

    }
  },
  details: {
    
  }
}));

export default Profile;
