import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHomeHook } from './hooks';

import SharedButton from '../../components/shared/SharedButton';
import FolderChart from '../../components/Listing';
import Navigationbar from '../../components/Header';
import './style.scss';

import Header from '../../components/Quicklink';
import StoreState from '../../store/utils/StoreTypes';

const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <div className="Main-container">
      <div>
        <Navigationbar />
      </div>
      <div className="sidebar-container">
        <div className="Sidebar-head">
          <div className="sidebar">
            <div className="side-tab">
              <a href="/#" className="Project">
                All Projects
              </a>
            </div>
            <div className="side-tab">Root</div>
            <div className="side-tab">Favourites</div>
          </div>
          <div className="sidebar-menu">
            <div className="active1">
              <a href="/#">Folders</a>
            </div>
            <div>
              <a href="/#">Tags</a>
            </div>
          </div>
          <div className="Folder-layout">
            <FolderChart />
          </div>
        </div>
        <div className="right-side">
          <Header />
        </div>
      </div>

      <SharedButton label="LogOut" onClick={logoutRequestHandler} />
    </div>
  );
};

export default Home;
