import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthStatus } from "../../selectors/selectors.js";

function PrivateRoute({children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
        localStorage.getItem("authToken") ? (
            <>
            {children}
            </>
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  }

  const mapStateToProps = state => {
    return {
     isAuthenticated: getAuthStatus(state),
    };
  };


  export default connect(mapStateToProps)(PrivateRoute);