import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Layout() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <p>Language Exchange</p>
          </Route>
        </Switch>
    </Router>
  );
}

export default Layout;
