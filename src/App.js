import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";
import { login, logout, selectUser } from './features/UserSlice';
import Checkout from './components/Checkout';
import './App.css'


function App() {
  const user = useSelector(selectUser);
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

    <div className='rootApp'>
      <Router>

            <Routes>
              <Route path='/login' element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>

      </Router>
     
    </div>
  );
}


export default App;
