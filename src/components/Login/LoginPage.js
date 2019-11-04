import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { connect } from "react-redux";
import { getAuthStatus } from "../../selectors/selectors.js";
import { auth } from "../../actions/actions.js";
import { Redirect } from "react-router-dom";

const LoginPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badCreds] = useState(false);

  function onLogin(e) {
    e.preventDefault();
    props.auth(email, password);
  }

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };
  return (
    <>
        {localStorage.getItem('authToken') ? (
        <Redirect to="/dashboard" />
      ) : (
        <Row>
          <Col md={{ size: 3, offset: 4 }}>
            <br/>
            <br/>
            <Form onSubmit={onLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter email"
                  onChange={handleEmail}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                />
                {badCreds && (
                  <Form.Text className="text-muted">
                    Invalid email or password
                  </Form.Text>
                )}
              </Form.Group>
              <Button variant="primary" className="float-right"  type="submit">
                Login
              </Button>
            </Form>
          </Col>
          <Col md="5"></Col>
        </Row>
       )} 
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: getAuthStatus(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userAuth: status => {
      dispatch(auth(status));
    },
    auth: (login, pass) => {
      const creds = {
        username: login,
        password: pass
      }
      dispatch({type:'USER_AUTH', payload: creds});
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  userAuth: PropTypes.func
};
