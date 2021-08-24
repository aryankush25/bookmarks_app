import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import './login.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from './../../assets/images/bookmarks-app-logo.png';
import InputField from '../../components/InputField';

const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields }
  } = useForm<Inputs>({
    mode: 'onChange'
  });

  type Inputs = {
    EmailID: string;
    Password: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  const [EmailValue, setCurrentEmailValue] = useState('');
  const [PasswordValue, setCurrentPasswordValue] = useState('');
  function handleChangeEmail(e) {
    setCurrentEmailValue(e.target.value);
  }
  function handleChangePassword(e) {
    setCurrentPasswordValue(e.target.value);
  }

  const EmailRegister = register('EmailID', {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid Email Address'
    }
  });

  const passwordRegister = register('Password', {
    required: true,
    maxLength: 8
  });

  return (
    <div className="login-wrapper">
      <div className="image-container">
        <img src={logo} alt="Image Not Available"></img>
      </div>

      <div className="fields-container">
        <div className="auth">
          <h1 className="main-welcome">Welcome back!</h1>
          <h3 className="subText">Log in to your account.</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                value={EmailValue}
                type="text"
                autoFocus
                style={{
                  borderBottom: errors['User Name'] ? '1px solid red' : ''
                }}
                {...EmailRegister}
                onChange={(e) => {
                  EmailRegister.onChange(e);
                  handleChangeEmail(e);
                }}
              />
              <label className={EmailValue && 'filled'}>Email ID</label>
            </div>
            {errors.EmailID && <p>{errors.EmailID.message} </p>}

            <div className="input-container">
              <input
                style={{ borderBottom: errors.Password ? '1px solid red' : '' }}
                value={PasswordValue}
                type="password"
                {...passwordRegister}
                onChange={(e) => {
                  passwordRegister.onChange(e);
                  handleChangePassword(e);
                }}
              />
              <label className={PasswordValue && 'filled'}>Password</label>
            </div>
            {/* {errors.Password && <p>Password field is required</p>} */}
            {errors.Password && touchedFields.Password && (
              <p>Maximum length of Password is 8</p>
            )}

            <input type="submit" disabled={!isValid} value="Continue" />

            {/* <button className="submitButton" type="submit" disabled={!isValid}>
              Continue
            </button> */}
          </form>

          <hr className="hr-text" data-content="OR" />

          <button className="signUp" onClick={() => history.push(SIGNUP_ROUTE)}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
