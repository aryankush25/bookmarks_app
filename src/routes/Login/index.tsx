import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from '../../components/shared/InputField';
import SharedContinueButton from '../../components/shared/SharedContinueButton';
import AuthContainer from '../../container/AuthContainer';
import './styles.scss';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields }
  } = useForm<Inputs>({
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(JSON.stringify(data));

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify(data);

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('https://bookmarks-app-server.herokuapp.com/login', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const [emailValue, setCurrentEmailValue] = useState('');
  const [passwordValue, setCurrentPasswordValue] = useState('');
  function handleChangeEmail(e) {
    setCurrentEmailValue(e.target.value);
  }
  function handleChangePassword(e) {
    setCurrentPasswordValue(e.target.value);
  }

  const EmailRegister = register('email', {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid Email Address'
    }
  });

  const passwordRegister = register('password', {
    required: true,
    maxLength: 8
  });

  return (
    <div className="login-wrapper">
      <AuthContainer />

      <div className="fields-container">
        <div className="auth">
          <h1 className="main-welcome">Welcome back!</h1>
          <h3 className="subText">Log in to your account.</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              errorName={errors.email}
              value={emailValue}
              type="text"
              register={EmailRegister}
              onChangeDefinition={(e) => {
                EmailRegister.onChange(e);
                handleChangeEmail(e);
              }}
              labelName="Email ID"
              errorMessage="Email ID is not valid"
              errorMessageValues={errors.email}
              autofocusEnabled="true"
            />

            <InputField
              errorName={errors.password}
              value={passwordValue}
              type="password"
              register={passwordRegister}
              onChangeDefinition={(e) => {
                passwordRegister.onChange(e);
                handleChangePassword(e);
              }}
              labelName="Password"
              errorMessageValues={errors.password && touchedFields.password}
              errorMessage="Maximum length of Password is 8"
            />

            <SharedContinueButton
              buttonType="submit"
              type="submit"
              disabled={!isValid}
              value="Continue"
            />
          </form>

          <hr className="hr-text" data-content="OR" />

          <SharedContinueButton
            buttonType="regular-button"
            function={() => history.push(SIGNUP_ROUTE)}
            buttonName="SIGN UP"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
