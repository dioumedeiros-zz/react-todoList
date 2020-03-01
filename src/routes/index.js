import React from "react";
import { Switch, Route } from "react-router-dom";

import List from "../pages/Todo/List";
import Register from "../pages/Todo/Register";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/register" exact component={Register} />
      <Route path="/register/:task" component={Register} />
    </Switch>
  );
}
