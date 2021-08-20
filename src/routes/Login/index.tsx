import React from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import './styles.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from './../../assets/images/bookmarks-app-logo.png';

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

  return (
    <div className="container">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>

      <div className="fields-container">
        <div className="auth">
          <h1 className="main-welcome">Welcome back</h1>
          <h3 className="subText">Log in to your account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>User Name</label>
            <input
              style={{ border: errors['User Name'] ? '1px solid red' : '' }}
              autoFocus
              {...register('User Name', { required: true, minLength: 5 })}
            />
            {errors['User Name'] && <p>User Name Field is required</p>}
            {errors['User Name'] && touchedFields['User Name'] && (
              <p>Minimum length is 5</p>
            )}

            <label>Password</label>
            <input
              style={{ border: errors.Password ? '1px solid red' : '' }}
              {...register('Password', { required: true, maxLength: 8 })}
            />
            {errors.Password && <p>Password field is required</p>}
            {errors.Password && touchedFields.Password && (
              <p>Maximum length of Password is 8</p>
            )}

            <input
              className="submitButton"
              type="submit"
              value="continue"
              disabled={!isValid}
            />
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
