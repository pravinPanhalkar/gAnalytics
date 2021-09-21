import React from "react";
import { Route, Switch } from "react-router";
import Home from "../HomePage/Home";
import WreathForm1 from "../WreathBuilderNew/WreathForm/WreathForm1";
import WreathForm from "../WreathForm/WreathForm";

const RouteConfig = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wreath-form" component={WreathForm1} />
      </Switch>
    </div>
  );
};

export default RouteConfig;
