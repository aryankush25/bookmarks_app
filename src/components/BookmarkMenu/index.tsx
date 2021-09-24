import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { requestDeleteBookmark } from '../../store/actions/userActions';

import './styles.scss';

export default function BookmarkMenu({ bookmarks }) {
  const dispatch = useDispatch();
  delete bookmarks.responseStatus;

  const singleBookmark = [bookmarks].map((bookmark) => {
    return bookmark.id;
  });
  function deleteBookmark(index) {
    console.log('clicked On delete bookmark', index);
    return dispatch(requestDeleteBookmark(singleBookmark[index]));
  }

  const menuItems = [
    {
      label: 'Edit'
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

  // const box = document.querySelector(".card");
  // document.addEventListener('click', function (event) {
  //   if (event.target.closest(".card")) return
  //   box.classList.add('js-js-hidden');
  // })

  const items = props.items;

  return (
    <div ref={wrapperRef} className="dropdown-menu" onBlur={close}>
      <div className={`toggle ${active ? 'active' : ''}`} onClick={toggle}>
        <span>
          <i className="fa fa-ellipsis-v" />
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
