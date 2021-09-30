import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import {
  requestAccessFolderSuccess,
  requestDeleteFolder,
  requestRenameFolder
} from '../../store/actions/userActions';

import './styles.scss';

function FolderMenu({ folders }) {
  const dispatch = useDispatch();

  function deleteFolder() {
    return dispatch(requestDeleteFolder(folders.id));
  }
  const [newName, setNewname] = useState('');
  const [showModal, setshowModal] = useState(false);

  function handleChange(e) {
    setNewname(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('new name', newName);
    return dispatch(requestRenameFolder(folders.id, newName));
  }

  const menuItems = [
    {
      label: 'Add sub folder'
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
          {/* <span onClick={() => setshowModal(false)} style={{ float: 'right' }}>
            <AiOutlineClose />
          </span> */}
          <h3 style={{ paddingLeft: '20px', fontSize: '24px' }}>
            Rename Folder
          </h3>
          <h5 style={{ color: 'grey', paddingLeft: '20px' }}>Folder</h5>
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
              onChange={handleChange}
              defaultValue={folders.name}
              placeholder="Enter Folder Name"
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
              Save
            </button>
          </form>
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
