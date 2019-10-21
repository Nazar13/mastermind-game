import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { connect } from "react-redux";
import { getAuthStatus } from "../../selectors/selectors.js";
import { auth } from "../../actions/actions.js";
import { Redirect } from "react-router-dom";
import axios from "axios";

const LoginPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badCreds, setBadCreds] = useState(false);

  function onLogin(e) {
    e.preventDefault();
    const testEmail = "Nazar";
    const testPassword = "123";
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => console.log(res.data));
    // .then(res => alert(res));
    // alert(email);

    if (email === testEmail && password === testPassword) {
      props.userAuth(true);
      setBadCreds(false);
    } else {
      setBadCreds(true);
      props.userAuth(false);
    }
  }

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <>
      {props.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Row>
          <Col md={{ size: 3, offset: 4 }}>
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
              <Button variant="primary" type="submit">
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
