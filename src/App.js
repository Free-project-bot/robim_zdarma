import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import Uno from "./Container/Uno/Uno";
import Dos from "./Container/Dos/Dos";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Uno" exact component={Uno} />
        <Route path="/Dos" exact component={Dos} />
      </Switch>
    </Layout>
  );
}

export default withRouter(App);
