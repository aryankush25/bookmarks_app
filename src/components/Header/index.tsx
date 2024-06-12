import React from 'react';
import dropIcon from '../../assets/images/ic_Dropdown@3x.png';
import name from '../../assets/images/Shivam Chaudhary@3x.png';
import profile from '../../assets/images/Profile@3x.png';
import notification from '../../assets/images/Group 2@3x.png';
import logo from '../../assets/images/LOGO@3x.png';
import './style.scss';

function NavigationBar() {
  return (
    <div className="navbar">
      <img className="sign14" src={logo} alt=""></img>
      <div className="navbar-menu">
        <div className="active">
          <a href="/#">Links</a>
        </div>
        <div>
          <a href="/#">Images</a>
        </div>
        <div>
          <a href="/#">Text</a>
        </div>
      </div>

      <div className="navbar-right">
        <img className="notification-icon" src={notification} alt=""></img>
        <img className="profile-icon" src={profile} alt=""></img>
        <img className="name-icon" src={name} alt=""></img>
        <img className="drop-icon" src={dropIcon} alt=""></img>
      </div>
    </div>
  );
}

export default NavigationBar;
