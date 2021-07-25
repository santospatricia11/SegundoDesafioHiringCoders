import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import RegisterProduct from "./pages/RegisterProduct";
import RegisterClient from "./pages/RegisterClient";
import BlackFriday from "./pages/BlackFriday";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newProduct" exact component={RegisterProduct} />
        <Route path="/newClient" exact component={RegisterClient} />
        <Route path="/blackfriday" exact component={BlackFriday} />
      </Switch>
    </BrowserRouter>
  );
}