import React from 'react';
import logo from './../../assets/images/bookmarks-app-logo.png';
import './styles.scss';

const AuthContainer = (props) => {
  return (
    <div className="auth-wrapper">
      <div className="image-container">
        <img src={logo} alt=" Not Available"></img>
      </div>
      {props.children}
    </div>
  );
};

export default AuthContainer;
