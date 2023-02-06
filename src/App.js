import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import {useDispatch} from 'react-redux'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";


function App() {
  const user = null;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch()
      }
    })
  },[])

  return (

    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Routes>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/checkout" element={<Paypal />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          )
        }
      </Router>
     
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#111'
  },

}));


export default App;
