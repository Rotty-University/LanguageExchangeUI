import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingView from "./landingView"
import LoginView from "./loginView"
import SignupView from "./signupView"
import OnboardingView from "./onboardingView"
import DashboardView from "./dashboardView"
import SettingsView from "./settingsView"

function Layout() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <LandingView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/signup">
            <SignupView />
          </Route>
          <Route path="/getstarted/:userId">
            <OnboardingView />
          </Route>
          <Route path="/dashboard/:userId">
            <DashboardView />
          </Route>
          <Route path="/profile/:userId">
            <SettingsView />
          </Route>
        </Switch>
    </Router>
  );
}

export default Layout;
