import React from "react";
import All_Route from "./route";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    
    <Router>
      <All_Route/>
    </Router>
);
}

// You can think of these components as "pages"
// in your app.



export default App;