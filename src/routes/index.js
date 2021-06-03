import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Main from "../pages/Main";
import Loading from "../pages/Loading";
import Register from "../pages/Register";

import { Context } from "../Context/AuthContext";

function Routes() {
  function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);
    console.log("auth", authenticated);

    if (loading) {
      return <Loading />;
    }

    if (isPrivate && !authenticated) {
      return <Redirect to="/login" />;
    }

    return <Route {...rest} />;
  }

  return (
    <>
      <Switch>
        <CustomRoute isPrivate exact path="/" component={Main} />
        <CustomRoute path="/login" exact component={Login} />
        <CustomRoute path="/register" exact component={Register} />
      </Switch>
    </>
  );
}

export default Routes;
