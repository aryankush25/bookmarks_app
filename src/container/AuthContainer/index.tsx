import React from 'react';
import logo from './../../assets/images/bookmarks-app-logo.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import './styles.scss';

const AuthContainer = () => {
  type Inputs = {
    'User Name': string;
    Password: string;
  };

  return (
    <div className="float-container">
      <div className="auth"></div>
    </div>
  );
};

export default AuthContainer;
