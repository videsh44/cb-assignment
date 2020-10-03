import React, { Suspense } from "react";
//import Loading from "./Elements/Loading";
import history from "../history";
import { Route, Router } from "react-router-dom";
import Routing from "./Routing";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setUserAuthValue } from "../actions/authActions";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <Suspense
      //  fallback={<Loading />}
      >
        <Router history={history}>
          <Route
            path="/*"
            render={() => (
              <Routing
              //cookies={this.props.cookies}
              />
            )}
          />
        </Router>
      </Suspense>
    </div>
  );
};

//const wrappedApp = connect(null, { setUserAuthValue })(App);

export default connect()(App);

//export default withCookies(wrappedApp);
