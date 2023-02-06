import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'

const Rows = ({title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h4'>{title}</Typography>
      <div className={classes.posters}>
        
      </div>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color:'#fff',
    marginLeft: '32px'
  }
}));

export default Rows