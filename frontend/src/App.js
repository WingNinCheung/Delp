import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DemoSignPage from "./components/DemoLogin";
import { Home } from "./components/HomePage";
import { Slash } from "./components/SlashPage";
import { BusinessDetail } from "./components/BusinessDatailPage";
import { AddBusiness } from "./components/AddBusinessPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/demo">
            <DemoSignPage />
          </Route>
        </Switch>
      )}
      <Switch>
        <Route exact path="/">
          <Slash />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/business/:id">
          <BusinessDetail />
        </Route>
        <Route exact path="/add-my-business">
          <AddBusiness />
        </Route>
      </Switch>
    </>
  );
}

export default App;
