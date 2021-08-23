import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import './Login.scss';
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
    'User Name': string;
    Password: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  const [UserNamevalue, setCurrentusernameValue] = useState('');
  const [PasswordValue, setCurrentPasswordValue] = useState('');
  function handleChangUserName(e) {
    setCurrentusernameValue(e.target.value);
  }
  function handleChangePassword(e) {
    setCurrentPasswordValue(e.target.value);
  }

  const userNameRegister = register('User Name', {
    required: true,
    minLength: 5
  });

  const passwordRegister = register('Password', {
    required: true,
    maxLength: 8
  });

  return (
    <div className="login-wrapper">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>

      <div className="fields-container">
        <div className="auth">
          <h1 className="main-welcome">Welcome back!</h1>
          <h3 className="subText">Log in to your account.</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                value={UserNamevalue}
                type="text"
                autoFocus
                style={{
                  borderBottom: errors['User Name'] ? '1px solid red' : ''
                }}
                {...userNameRegister}
                onChange={(e) => {
                  userNameRegister.onChange(e);
                  handleChangUserName(e);
                }}
              />
              <label className={UserNamevalue && 'filled'}>User Name</label>
            </div>

            {/* <InputField
              label="User Name"
              style={{ border: errors['User Name'] ? '1px solid red' : '' }}
              autofocus="true"
              type="input"
              {...register('User Name', { required: true, minLength: 5 })}
            /> */}
            {/* {errors['User Name'] && <p>User Name Field is required</p>} */}
            {errors['User Name'] && touchedFields['User Name'] && (
              <p>Minimum length is 5</p>
            )}

            <div className="input-container">
              <input
                style={{ borderBottom: errors.Password ? '1px solid red' : '' }}
                value={PasswordValue}
                type="text"
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
