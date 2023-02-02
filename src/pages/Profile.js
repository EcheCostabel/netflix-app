import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import Header from '../components/Header';

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Edit profile</Typography>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default Profile