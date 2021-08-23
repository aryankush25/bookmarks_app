import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Signup.scss';
import logo from './../../assets/images/bookmarks-app-logo.png';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields }
  } = useForm<Inputs>({
    mode: 'onChange'
  });

  type Inputs = {
    'Full Name': string;
    'User Name': string;
    Password: string;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="signup-wrapper">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>
      <div className="fields-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input
              style={{
                borderBottom: errors['Full Name'] ? '1px solid red' : ''
              }}
              {...register('Full Name', { required: true })}
            />
            <label className="floating-label">Full Name</label>
          </div>
          {errors['Full Name'] && <p>Full Name Field is Required</p>}

          <div className="input-container">
            <input
              style={{
                borderBottom: errors['User Name'] ? '1px solid red' : ''
              }}
              autoFocus
              {...register('User Name', { required: true, minLength: 5 })}
            />
            <label className="floating-label">User Name</label>
          </div>
          {errors['User Name'] && <p>User Name Field is required</p>}
          {errors['User Name'] && touchedFields['User Name'] && (
            <p>Minimum length is 5</p>
          )}
          <div className="input-container">
            <input
              style={{ borderBottom: errors.Password ? '1px solid red' : '' }}
              {...register('Password', { required: true, maxLength: 8 })}
            />
            <label className="floating-label">Password</label>
          </div>
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
      </div>
    </div>
  );
};

export default Signup;
