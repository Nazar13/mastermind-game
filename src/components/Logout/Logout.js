import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { auth } from "../../actions/actions.js";
import { Redirect } from "react-router-dom";

const Logout = props => {
  props.userAuth(false);
  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    userAuth: status => {
      dispatch(auth(status));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);

Logout.propTypes = {
  userAuth: PropTypes.func
};
