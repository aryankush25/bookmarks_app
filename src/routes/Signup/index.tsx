import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignupHook } from './hooks';
import InputField from '../../components/shared/InputField';
import AuthContainer from '../../container/AuthContainer';
import SharedContinueButton from '../../components/shared/SharedContinueButton';
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
    formState: { errors, isValid, touchedFields }
  } = useForm<Inputs>({
    mode: 'onChange'
  });

  const { signUpHandler } = useSignupHook();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signUpHandler(data);
  };

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
    maxLength: 8
  });

  return (
    <div className="signup-wrapper">
      <AuthContainer />
      <div className="fields-container">
        <div className="sign-up-form">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              errorMessageValues={errors.name}
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
              errorMessageValues={errors.password && touchedFields.password}
              errorMessage="Maximum Length of Password is 8"
            />

            <SharedContinueButton
              buttonType="submit"
              type="submit"
              disabled={!isValid}
              value="continue"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
