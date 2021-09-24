import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestDeleteFolder } from '../../store/actions/userActions';

import './styles.scss';

function FolderMenu({ folders }) {
  const [showModal, setshowModal] = useState(false);
  console.log('folderMenu', folders);
  const dispatch = useDispatch();

  const singleFolder = [folders].map((folder) => {
    return folder.id;
  });
  function deleteFolder(index) {
    console.log('clicked On delete bookmark', index);
    return dispatch(requestDeleteFolder(singleFolder[index]));
  }
  function handleModal() {
    return setshowModal(true);
  }

  const menuItems = [
    {
      label: 'Add sub folder',

      onClick: handleModal
    },
    {
      label: 'Rename'

      // onClick: () => alert('Delete')
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
    </div>
  );
}

export default FolderMenu;
