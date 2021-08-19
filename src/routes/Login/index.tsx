import React from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import AuthContainer from './../../container/AuthContainer';

const Login = () => {
  const history = useHistory();

  return (
    <AuthContainer>
      <input className="submitButton" type="submit" value="continue" />
      <hr />
      <button className="signUp" onClick={() => history.push(SIGNUP_ROUTE)}>
        SIGN UP
      </button>
    </AuthContainer>
  );
};

export default Login;
