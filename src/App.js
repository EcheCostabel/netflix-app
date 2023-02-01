import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";


function App() {
  const user = 'pepe';
  const classes = useStyles();

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
    // backgroundColor: '#111'
  },

}));


export default App;
