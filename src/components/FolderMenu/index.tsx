import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import {
  requestDeleteFolder,
  requestRenameFolder,
  requestAddSubFolder
} from '../../store/actions/userActions';

import './styles.scss';
import './style.scss';
function FolderMenu({ folders }) {
  const [newName, setNewname] = useState('');
  const [showModal, setshowModal] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);
  const [foldername, setFoldername] = useState('');
  const dispatch = useDispatch();
  function handleCreateFolder(e) {
    setFoldername(e.target.value);
  }

  function createFolder(event) {
    event.preventDefault();

    dispatch(requestAddSubFolder(folders.id, foldername));
    setFoldername('');
  }

  function deleteFolder() {
    return dispatch(requestDeleteFolder(folders.id));
  }

  function handleChange(e) {
    setNewname(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    return dispatch(requestRenameFolder(folders.id, newName));
  }

  const menuItems = [
    {
      label: 'Add sub folder',
      onClick: () => setShowSubModal(true)
    },
    {
      label: 'Rename',
      onClick: () => setshowModal(true)
      // onClick: renameFolder
    },

    {
      label: 'Delete',
      onClick: deleteFolder

      // onClick: () => alert('Delete')
    }
  ];
  return (
    <div className="folder-dropdown">
      <div className="card">
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
          <span onClick={() => setshowModal(false)} style={{ float: 'right' }}>
            <AiOutlineClose />
          </span>
          <div className="rename-folder-content">
            <h3
              className="rename-folder"
              // style={{ paddingLeft: '20px', fontSize: '24px' }}
            >
              Rename Folder
            </h3>
            <h5
              className="folder"
              // style={{ color: 'grey', paddingLeft: '20px' }}
            >
              Folder
            </h5>
            <form className="rename-form" onSubmit={handleSubmit}>
              <input
                className="input-area"
                // style={{
                //   color: 'black',
                //   width: '80%',
                //   padding: '12px 12px',
                //   marginBottom: '30px',
                //   marginTop: '-15px',
                //   paddingLeft: '30px',
                //   border: '2px solid whitesmoke',
                //   borderRadius: '10px'
                // }}
                name="folder"
                type="text"
                onChange={handleChange}
                defaultValue={folders.name}
                placeholder="Enter Folder Name"
              />
              <button
                className="submit-button"
                // style={{
                //   backgroundColor: '#688ce6',
                //   fontSize: '18px',
                //   border: '1px',
                //   marginTop: '8px',
                //   borderRadius: '5px',
                //   fontFamily: 'poppins',
                //   color: 'white',
                //   paddingLeft: '45px',
                //   paddingRight: '45px',
                //   display: 'flex',
                //   paddingTop: '5px',
                //   paddingBottom: '5px'
                // }}
                type="submit">
                Save
              </button>
            </form>
          </div>
        </Modal>
        <Modal
          isOpen={showSubModal}
          onRequestClose={() => setShowSubModal(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.2)'
            },
            content: {
              color: 'black',
              height: '400px',
              width: '450px',
              margin: 'auto',
              borderRadius: '20px',
              paddingLeft: '25px',
              paddingBottom: '25px',
              fontFamily: 'poppins'
            }
          }}>
          <span
            onClick={() => setShowSubModal(false)}
            style={{ float: 'right' }}>
            <AiOutlineClose />
          </span>
          <div className="sub-folder-container">
            <h3
              className="create-sub-folder"
              // style={{ paddingLeft: '20px', fontSize: '24px' }}
            >
              Create Sub folder{' '}
            </h3>
            <h5
              className="folder"
              // style={{ color: 'grey', paddingLeft: '20px' }}
            >
              Parent Folder
            </h5>
            <h2
              className="folder-name"
              // style={{ color: '#6a8ae6', paddingLeft: '20px' }}
            >
              {folders.name}
            </h2>
            <h5
              className="folder"
              // style={{ color: 'grey', paddingLeft: '20px' }}
            >
              FOLDER NAME
            </h5>
            <form className="subfolder-from" onSubmit={createFolder}>
              <input
                className="input-area"
                // style={{
                //   color: 'black',
                //   width: '80%',
                //   padding: '12px 12px',
                //   marginBottom: '30px',
                //   marginTop: '-15px',
                //   paddingLeft: '30px',
                //   border: '2px solid whitesmoke',
                //   borderRadius: '10px'
                // }}
                name="folder"
                type="text"
                value={foldername}
                onChange={handleCreateFolder}
                placeholder="Enter folder name"
              />
              <button
                className="submit-button"
                // style={{
                //   backgroundColor: '#688ce6',
                //   fontSize: '18px',
                //   border: '1px',
                //   marginTop: '8px',
                //   borderRadius: '5px',
                //   fontFamily: 'poppins',
                //   color: 'white',
                //   paddingLeft: '45px',
                //   paddingRight: '45px',
                //   display: 'flex',
                //   paddingTop: '5px',
                //   paddingBottom: '5px'
                // }}
                type="submit">
                Create
              </button>
            </form>
          </div>
        </Modal>
        <DropdownMenus items={menuItems} />
      </div>
    </div>
  );
}

function DropdownMenus(props) {
  const [active, setActive] = useState(false);

  function toggle() {
    return setActive((active) => {
      return !active;
    });
  }

  function close() {
    return setActive(false);
  }

  const items = props.items;

  return (
    <div onBlur={close}>
      <div className="dropdown-menu" onBlur={close}>
        <div className={`toggle ${active ? 'active' : ''}`} onClick={toggle}>
          <span>
            <i className="fa fa-ellipsis-v " />
          </span>
        </div>
        <div className={`menu ${active ? 'expanded' : 'collapsed'}`}>
          <ul>
            {items.map((i, index) => (
              <li key={index} onClick={() => i.onClick(index)}>
                <span>
                  <i className={i.icon} />
                </span>

                <span className="label">{i.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FolderMenu;
