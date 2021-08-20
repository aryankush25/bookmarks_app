import React from 'react';
import { useHomeHook } from './hooks';
import SharedButton from '../../components/shared/SharedButton';
import './style.scss';
import { Tabs, TabList, Tab } from 'react-tabs';
import image from './notification.png';
import f1 from './folder@3x.png';
import f2 from './right-arrow-black-triangle copy 3@3x.png';
import b1 from './ic_Dropdown@3x.png';
import b2 from './Shivam Chaudhary@3x.png';
import b3 from './Profile@3x.png';
import b4 from './Group 2@3x.png';
import logoo from './LOGO@3x.png';

import f4 from './right-arrow-black-triangle copy@3x.png';
//import { IoMdArrowDropright } from 'react-icons/fa';

const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <div>
      <header>
        <nav className="navbar">
          <img className="sign14" src={logoo}></img>
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="active">
                <a href="#">Links</a>
              </li>
              <li>
                <a href="#">Images</a>
              </li>
              <li>
                <a href="#">Text</a>
              </li>
            </ul>
          </div>
          <div>
            <img className="sign11" src={b4}></img>
            <img className="sign12" src={b3}></img>
            <img className="sign13" src={b2}></img>
            <img className="sign" src={b1}></img>
          </div>
        </nav>
      </header>
      <div className="Sidebar-head">
        <div className="sidebar">
          <br></br>
          <br />
          <div className="N">
            <a className="Project"> All Projects </a>
          </div>
          <br />
          <div className="N">Root</div>
          <br />
          <div className="N">Favourites</div>
          <br />
        </div>
        <br></br>
        <br />
        <div className="sidebar-menu">
          <ul className="sidebar-nav">
            <li className="active1">
              <a href="#">Folders</a>
            </li>
            <li>
              <a href="#">Tags</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="layout2">
          <br />
          <ul>
            <ul className="box1">
              <li>
                <img className="sign10" src={f2}></img>
                <img className="sign1" src={f1}></img>
                Folder 1
                <ul className="box1">
                  <br />
                  <br />
                  <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="sign1" src={f1}></img>
                    Folder 2
                  </li>
                </ul>
                <ul className="box1">
                  <br />
                  <br />
                  <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="sign1" src={f1}></img>
                    Folder 3
                  </li>
                </ul>
              </li>
              <br />
              <br />
              <li>
                <img className="sign2" src={f4}></img>
                <img className="sign1" src={f1}></img>Folder 4
              </li>
              <br />
              <br />
              <li>
                <img className="sign2" src={f4}></img>
                <img className="sign1" src={f1}></img>Folder 5
              </li>
              <br />
              <br />
              <li>
                <img className="sign2" src={f4}></img>
                <img className="sign1" src={f1}></img>Folder 6
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <SharedButton label="LogOut" onClick={logoutRequestHandler} />
    </div>
  );
};

export default Home;
