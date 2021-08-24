import React from 'react';
import { useHomeHook } from './hooks';
import SharedButton from '../../components/shared/SharedButton';
import FolderChart from '../../components/Listing';
import Navigationbar from '../../components/Header';
import './style.scss';

const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <div className="Main-container">
      <div>
        <Navigationbar />
      </div>
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
      <SharedButton label="LogOut" onClick={logoutRequestHandler} />
    </div>
  );
};

export default Home;
