import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";


function App() {
  const user = null;

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

export default App;
