import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { AiOutlineClose } from 'react-icons/ai';

import Modal from 'react-modal';

import './styles.scss';
import './style.scss';
// import FolderChart from '../../components/Listing';
import DisplayFolder from '../../components/ModalContent';

import img from '../../assets/images/btn_Filter@3x.png';
import img2 from '../../assets/images/Group 9@3x.png';
import plus from '../../assets/images/Shape@2x.png';
import grid from '../../assets/images/menuuu@2x.png';
import dark from '../../assets/images/dark@2x.png';
import list from '../../assets/images/list (1)@2x.png';
import listImg from '../../assets/images/listview@2x.png';

function Searching({ view, setView }) {
  const [buttonState1, setbuttonState1] = useState(true);
  const [buttonState, setbuttonState] = useState(false);
  const [showModal, setshowModal] = useState(false);

  function changeView() {
    return setView(false);
  }
  function changegridView() {
    return setView(true);
  }
  return (
    <div className="searching-bookmark">
      <div className="input-wrapper">
        <input id="stuff" placeholder="Search.." />
        <label className="fa fa-search input-icon"></label>
        <button className="btn">
          <img className="add-icon" src={img} alt="Not Found"></img>
        </button>
        <Modal
          isOpen={showModal}
          onRequestClose={() => setshowModal(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.2)'
            },
            content: {
              color: 'black',
              height: '490px',
              width: '800px',
              margin: 'auto',
              borderRadius: '20px',
              paddingLeft: '25px',
              paddingBottom: '25px',
              fontFamily: 'poppins'
            }
          }}>
          <span onClick={() => setshowModal(false)} style={{ float: 'right' }}>
            <AiOutlineClose />
          </span>
          <div className=" addLink-container">
            <div className="folder-section">
              <div className="folder-container">
                <h3 className="save-to">SAVE TO</h3>
                <div className="inside">
                  <button className="plus-button">
                    <img src={plus} alt="Not Found" />
                  </button>
                </div>
              </div>
              <div className="folder-within-modal">
                <DisplayFolder />
              </div>
            </div>

            <div className="addLink-section">
              <h2 className="edit-link">Add Link</h2>
              <h5 className="link-url">LINK URL</h5>
              <form className="link-form">
                <input
                  className="input-area"
                  name="folder"
                  type="text"
                  // onChange={handleChange}
                  // defaultValue={folders.name}
                  placeholder="Enter Url Link"
                />
                <div className="checkbox-container">
                  <Checkbox
                    style={{
                      color: '#3CD598'
                    }}
                  />
                  <p>Add Favorites</p>
                </div>
                <button className="save-button" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </Modal>
        <button onClick={() => setshowModal(true)} className="add-link">
          <img src={img2} alt="Not"></img>
        </button>

        <button className={buttonState1 ? 'gridview-true' : 'grid-view'}>
          <img
            src={buttonState ? dark : grid}
            alt="Not Found"
            onClick={() => {
              changegridView();
              setbuttonState(false);
              setbuttonState1(true);
            }}></img>
        </button>
        <button className={buttonState ? 'listview-true ' : 'list-view'}>
          <img
            src={buttonState1 ? list : listImg}
            alt="NotFound"
            onClick={() => {
              changeView();
              setbuttonState(true);
              setbuttonState1(false);
            }}></img>
        </button>
      </div>
    </div>
  );
}

export default Searching;
