import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SIGNUP_ROUTE } from './../../utils/routesConstants';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLoginHook } from './hooks';
import StoreState from '../../store/utils/StoreTypes';
import InputField from '../../components/shared/InputField';
import SharedContinueButton from '../../components/shared/SharedContinueButton';
import AuthContainer from '../../container/AuthContainer';
import Loader from './../../components/shared/Loader';
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

  const { signInRequestHandler } = useLoginHook();

  const spinner = useSelector(
    (state: StoreState) => state.userData.loginSpinner
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signInRequestHandler(data);
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
    minLength: 8
  });

  return (
    <AuthContainer>
      <div className="fields-container">
        <div className="auth">
          <h1 className="main-heading">Welcome back!</h1>
          <h3 className="sub-text">Log in to your account.</h3>
          <form onSubmit={handleSubmit(onSubmit)} className=".user-form">
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
              errorMessage="Minimum length of Password is 8"
            />

            <span>
              <SharedContinueButton
                buttonType="submit"
                type="submit"
                disabled={!isValid}
                value="Continue"
                isLoading={spinner}
              />
              <Loader enabled={spinner} />
            </span>
          </form>

          <div className="separator">OR</div>

          <SharedContinueButton
            buttonType="regular-button"
            buttonClicked={() => history.push(SIGNUP_ROUTE)}
            buttonName="Sign Up"
            isLoading={spinner}
          />
        </div>
      </div>
    </AuthContainer>
  );
};

export default Login;
