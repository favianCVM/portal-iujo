import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import ThemeContainer from "../containers/ThemeContainer";
import TermGlossaryContainer from "../containers/TermGlossaryContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/theme/:title" component={ThemeContainer} />
        <Route exact path="/term_glosary" component={TermGlossaryContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
