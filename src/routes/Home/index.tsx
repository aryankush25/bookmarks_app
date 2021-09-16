import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

import { requestCreateFolder } from '../../store/actions/userActions';

import FolderChart from '../../components/Listing';
import Navigationbar from '../../components/Header';
import add from '../../assets/images/add.png';
import search from '../../assets/images/Search@3x.png';
import './style.scss';
import './styles.scss';

import Header from '../../components/Quicklink';
import BookmarkData from '../../components/BookmarkData';
import Searching from '../../components/Searching';

const Home = () => {
  const [foldername, setFoldername] = useState('');
  const [showModal, setshowModal] = useState(false);

  function handleCreateFolder(e) {
    setFoldername(e.target.value);
  }
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();

    dispatch(requestCreateFolder(foldername));
    setFoldername('');
  }

  return (
    <div className="Main-container">
      <div>
        {/* <SharedButton label="LogOut" onClick={logoutRequestHandler} /> */}
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
          <div className="search-section">
            <input
              className="search-bar"
              src={search}
              type="text"
              placeholder=" Search"
            />
            <button
              onClick={() => {
                setshowModal(true);
                console.log('Triggrerd Function onclick');
              }}
              className="btn">
              <img className="add-icon" src={add} alt=""></img>
            </button>
            <div className="modal-section">
              <Modal
                isOpen={showModal}
                onRequestClose={() => setshowModal(false)}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(0,0,0,0.2)'
                  },
                  content: {
                    color: 'black',
                    height: '24%',
                    width: '20%',
                    margin: 'auto',
                    borderRadius: '20px',
                    paddingLeft: '25px',
                    paddingBottom: '25px',
                    fontFamily: 'poppins'
                  }
                }}>
                <span
                  onClick={() => setshowModal(false)}
                  style={{ float: 'right' }}>
                  <AiOutlineClose />
                </span>
                <h3 style={{ paddingLeft: '20px', fontSize: '24px' }}>
                  Create folder{' '}
                </h3>
                <h5 style={{ color: 'grey', paddingLeft: '20px' }}>
                  FOLDER NAME
                </h5>
                <form onSubmit={handleSubmit}>
                  <input
                    style={{
                      color: 'black',
                      width: '80%',
                      padding: '12px 12px',
                      marginBottom: '30px',
                      marginTop: '-15px',
                      paddingLeft: '30px',
                      border: '2px solid whitesmoke',
                      borderRadius: '10px'
                    }}
                    name="folder"
                    type="text"
                    value={foldername}
                    onChange={handleCreateFolder}
                    placeholder="Enter folder name"
                  />
                  <button
                    style={{
                      backgroundColor: '#688ce6',
                      fontSize: '18px',
                      border: '1px',
                      marginTop: '8px',
                      borderRadius: '5px',
                      fontFamily: 'poppins',
                      color: 'white',
                      paddingLeft: '45px',
                      paddingRight: '45px',
                      display: 'flex',
                      paddingTop: '5px',
                      paddingBottom: '5px'
                    }}
                    type="submit">
                    Create
                  </button>
                </form>
              </Modal>
            </div>
          </div>
          <div className="Folder-layout">
            <FolderChart />
          </div>
        </div>
        <div className="right-side">
          <Header />
          <Searching />
          <BookmarkData />
        </div>
      </div>
    </div>
  );
};

export default Home;
