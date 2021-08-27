import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignupHook } from './hooks';
import { useSelector } from 'react-redux';
import StoreState from '../../store/utils/StoreTypes';
import InputField from '../../components/shared/InputField';
import AuthContainer from '../../container/AuthContainer';
import SharedContinueButton from '../../components/shared/SharedContinueButton';
import Loader from './../../components/shared/Loader';
import './styles.scss';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, dirtyFields }
  } = useForm<Inputs>({
    mode: 'onChange'
  });

  const { signUpHandler } = useSignupHook();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signUpHandler(data);
  };

  const spinner = useSelector(
    (state: StoreState) => state.userData.loginSpinner
  );

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [emailID, setEmail] = useState('');

  function handleChangeFullName(e) {
    setFullName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const fullNameRegister = register('name', { required: true });
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
        <div className="sign-up-form">
          <div>
            <h1 className="main-heading">
              Never lose track of a bookmark again.
            </h1>
            <h3 className="sub-text">
              Simple, fast and powerful bookmark management software for
              businesses and teams to stay organized.
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className=".user-form">
              <InputField
                errorName={errors.name}
                value={fullName}
                type="text"
                register={fullNameRegister}
                onChangeDefinition={(e) => {
                  fullNameRegister.onChange(e);
                  handleChangeFullName(e);
                }}
                labelName="Full Name"
                errorMessageValues={!dirtyFields.name || errors.name}
                errorMessage="Full Name Field is required"
                autofocusEnabled="true"
              />

              <InputField
                errorName={errors.email}
                value={emailID}
                type="text"
                register={EmailRegister}
                onChangeDefinition={(e) => {
                  EmailRegister.onChange(e);
                  handleChangeEmail(e);
                }}
                labelName="Email ID"
                errorMessageValues={errors.email}
                errorMessage="Invalid Email Address"
              />

              <InputField
                errorName={errors.password}
                value={password}
                type="password"
                register={passwordRegister}
                onChangeDefinition={(e) => {
                  passwordRegister.onChange(e);
                  handleChangePassword(e);
                }}
                labelName="Password"
                errorMessageValues={errors.password}
                errorMessage="Minimum Length of Password is 8"
              />

              <SharedContinueButton
                buttonType="submit"
                type="submit"
                disabled={!isValid}
                value="Continue"
              />
              <Loader enabled={spinner} />
            </form>
          </div>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Signup;
