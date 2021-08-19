import React from 'react';
// import { useSignUpHook } from './hooks';
import SharedButton from '../../components/shared/SharedButton';
import ReactDOM from 'react-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.scss';
import logo from './../../assets/images/bookmarks-app-logo.png';

type Inputs = {
  'Full Name': string;
  'User Name': string;
  Password: string;
};

const Signup = () => {
  //   const { signUpRequestHandler } = useSignUpHook();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="float-container">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>

      <div className="auth">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name</label>
          <input {...register('Full Name', { required: true })} />
          {errors['Full Name'] && <p>This field is required</p>}
          <label>User Name</label>
          <input {...register('User Name', { required: true })} />
          {errors['User Name'] && <p>This field is required</p>}
          <label>Password</label>
          <input {...register('Password', { required: true, maxLength: 10 })} />
          {errors.Password && <p>This field is required</p>}
          <input className="submitButton" type="submit" value="continue" />
        </form>
      </div>
    </div>
  );
};

export default Signup;

{
  /* 
<div>This is login route</div>
<SharedButton label="Sign In" onClick={signInRequestHandler} /> */
}
