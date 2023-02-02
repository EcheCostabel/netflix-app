import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { NetflixButton } from '../styled/styledcomponents';

const Plans = ({cost, children}) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Typography className={classes.standard} variant='h5'>
            {children}
        </Typography>
        <NetflixButton>Subscribe</NetflixButton>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default Plans