import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPrice } from '../features/PriceSlice';
import { NetflixButton } from '../styled/styledcomponents';

const Plans = ({cost, children, color, wide}) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const navigate = useNavigate()

  const handleClick = (cost) => {
    dispatch(setPrice(cost))
    navigate('/checkout')
  }

  return (
      <div className={classes.root}>
        <Typography className={classes.standard} variant='h5'>
            {children}
        </Typography>
        <NetflixButton
        color={color} 
        wide={wide}
        onClick={()=> handleClick(cost)}
        >
          Subscribe
        </NetflixButton>
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