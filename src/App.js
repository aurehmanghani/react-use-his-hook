import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login'
import Profile from "./Profile";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
    </Router>
  );
}
