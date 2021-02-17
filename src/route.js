import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function All_Routes() {
  return (
    
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Registrarse</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

    

export default All_Routes;