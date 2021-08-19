import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.scss';
import AuthContainer from './../../container/AuthContainer';

type Inputs = {
  'Full Name': string;
};

const Signup = () => {
  const {
    register,
    formState: { errors }
  } = useForm<Inputs>();

  return (
    <AuthContainer>
      <div className="signup-page">
        <label>Full Name</label>
        <input {...register('Full Name', { required: true })} />
        {errors['Full Name'] && <p>This field is required</p>}
        <input className="submitButton" type="submit" value="continue" />
      </div>
    </AuthContainer>
  );
};

export default Signup;
