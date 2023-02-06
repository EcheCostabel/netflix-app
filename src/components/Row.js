import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'

const Rows = ({title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const [movies, setMovies ] = useState();

  const base_url = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  },[fetchUrl])

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