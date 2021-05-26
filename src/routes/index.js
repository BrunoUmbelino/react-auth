import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Main from "../pages/Main";
import Loading from "../pages/Loading";

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
        <CustomRoute path="/login" exact component={Login} />
        <CustomRoute isPrivate exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default Routes;
