import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";
import { login, logout, selectUser } from './features/UserSlice';


function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe;
  },[dispatch])

  return (

    <div className={classes.root}>
      <Router>

            <Routes>
              <Route path='/login' element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/checkout" element={<Paypal />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>

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
