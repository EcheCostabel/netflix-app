import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { NetflixButton } from '../styled/styledcomponents';

const Plans = ({cost, children, color, wide}) => {


  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Typography className={classes.standard} variant='h5'>
            {children}
        </Typography>
        <NetflixButton color={color} wide={wide}>Subscribe</NetflixButton>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '24px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      marginBottom: '16px'
    }
  },
  standard: {
    fontSize: '1.2rem',
  }
}));

export default Plans