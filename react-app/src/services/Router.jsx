import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Placeholder from "../components/Placeholder";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Placeholder} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
