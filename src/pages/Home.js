import { makeStyles } from '@mui/styles';
import React from 'react';
import Header from '../components/Header';

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
  
    }
  }));

export default Home;