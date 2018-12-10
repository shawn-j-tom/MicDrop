import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Feedback from "./containers/Feedback";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Table from "./containers/Table";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute  path="/login" exact component={Login} props={childProps}/>
    <Route  path="/feedback" exact component={Feedback} />
    <AppliedRoute  path="/table" exact component={Table} props={childProps}/>
    <AppliedRoute  path="/" exact component={Home} props={childProps}/>
    <Route component={NotFound} />
  </Switch>;
