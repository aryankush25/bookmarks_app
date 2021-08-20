import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.scss';
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
    <div className="container">
      <div className="image">
        <img src={logo} alt="Image Not Available"></img>
      </div>
      <div className="fields-container">
        <div className="signup-page">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            <input {...register('Full Name', { required: true })} />
            {errors['Full Name'] && <p>Full Name Field is Required</p>}

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
        </div>
      </div>
    </div>
  );
};

export default Signup;
