import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import {
  requestDeleteBookmark,
  requestEditBookmark
} from '../../store/actions/userActions';

import './styles.scss';

export default function BookmarkMenu({ bookmark }) {
  const dispatch = useDispatch();

  function deleteBookmark() {
    return dispatch(requestDeleteBookmark(bookmark.id));
  }

  const [showModal, setshowModal] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');

  function handleChangeUrl(e) {
    setNewUrl(e.target.value);
  }
  function handleChangeName(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    dispatch(requestEditBookmark(bookmark.id, newName, newUrl));
    setNewName('');
    setNewUrl('');
  }

  const menuItems = [
    {
      label: 'Edit',

      onClick: () => setshowModal(true)
    },

    {
      label: 'Delete',

      // onClick: () => alert('Delete')
      onClick: deleteBookmark
    }
  ];
  return (
    <div className="bookmark-menu">
      <div className="card">
        <Modal
          isOpen={showModal}
          onRequestClose={() => setshowModal(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.2)',
              height: '100%',
              width: '100%'
            },
            content: {
              color: 'black',
              height: '300px',
              width: '400px',
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
            Edit Bookmark
          </h3>
          <h5 style={{ color: 'grey', paddingLeft: '20px' }}>Url</h5>
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
              onChange={handleChangeName}
              defaultValue={bookmark.name}
              placeholder="Enter Name"
            />
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
              onChange={handleChangeUrl}
              defaultValue={bookmark.url}
              placeholder="Enter Url"
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
        <DropdownMenu items={menuItems} />
      </div>
    </div>
  );
}

function DropdownMenu(props) {
  const [active, setActive] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          return;
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
    <div ref={wrapperRef} className="dropdown-menu" onBlur={close}>
      <div className={`toggle ${active ? 'active' : ''}`} onClick={toggle}>
        <span>
          <i style={{ color: 'gray' }} className="fa fa-ellipsis-v fa-lg" />
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
  );
}
