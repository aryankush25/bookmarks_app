import React from 'react';
import b1 from '../../assets/images/ic_Dropdown@3x.png';
import b2 from '../../assets/images/Shivam Chaudhary@3x.png';
import b3 from '../../assets/images/Profile@3x.png';
import b4 from '../../assets/images/Group 2@3x.png';
import logoo from '../../assets/images/LOGO@3x.png';
import './style.scss';

function Navigationbar() {
  return (
    <div className="navbar">
      <img className="sign14" src={logoo} alt=""></img>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="active">
            <a href="/#">Links</a>
          </li>
          <li>
            <a href="/#">Images</a>
          </li>
          <li>
            <a href="/#">Text</a>
          </li>
        </ul>
      </div>

      <div className=".navbar-right">
        <img className="sign11" src={b4} alt=""></img>
        <img className="sign12" src={b3} alt=""></img>
        <img className="sign13" src={b2} alt=""></img>
        <img className="sign" src={b1} alt=""></img>
      </div>
    </div>
  );
}

export default Navigationbar;
