import React from 'react';
import logo from './../../assets/images/bookmarks-app-logo.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.scss';

const AuthContainer = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  type Inputs = {
    'User Name': string;
    Password: string;
  };

  return (
    <div className="float-container">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>

      <div className="auth">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>User Name</label>
          <input {...register('User Name')} />
          <label>Password</label>
          <input {...register('Password', { required: true, maxLength: 10 })} />
          {errors.Password && <p>This field is required</p>}
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthContainer;
