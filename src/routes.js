import { Route, Switch } from "react-router-dom";
import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard1 from "./components/Wizard/Wizard1";
import Wizard2 from "./components/Wizard/Wizard2";
import Wizard3 from "./components/Wizard/Wizard3";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard1} path="/wizard1" />
    <Route component={Wizard2} exact path="/wizard2" />
    <Route component={Wizard3} exact path="/wizard3" />
  </Switch>
);
