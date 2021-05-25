import Login from "./pages/Login";
import Main from "./pages/Main";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
