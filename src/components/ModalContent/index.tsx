import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  requestAccessChildfolder,
  requestAccessFolder,
  requestDeleteFolder,
  requestRenameFolder
} from '../../store/actions/userActions';
import StoreState from '../../store/utils/StoreTypes';

import './styles.scss';
import folderImg from '../../assets/images/folder@3x.png';
import dropdown from '../../assets/images/right-arrow-black-triangle copy@3x.png';
import edit from '../../assets/images/penedit@2x.png';
import trash from '../../assets/images/trash@2x.png';
import addIcon from '../../assets/images/add.png';
import whiteFolder from '../../assets/images/folder@2x.png';

const Tree = ({ folders, nodeData }) => {
  return (
    <div>
      {folders.map((folder) => {
        const { id } = folder;
        return <TreeNode key={id} node={folder} nodeData={nodeData} />;
      })}
    </div>
  );
};

const TreeNode = ({ node, nodeData }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [folderState, setFolderState] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [editName, setEditName] = useState(false);
  const [newName, setNewName] = useState('');

  const loader = useSelector(
    (state: StoreState) => state.userData.folderSpinner
  );

  const currentFolder = useSelector(
    (state: StoreState) => state.userData.userData
  ) as any;

  const dispatch = useDispatch();
  function handleClick() {
    return dispatch(requestAccessChildfolder({ id: node['id'] }));
  }

  function deleteFolder() {
    return dispatch(requestDeleteFolder(node.id));
  }

  function onItemClick() {
    setFolderState(node.id);
  }

  function handleEdit(e) {
    // e.preventDefault();
    // dispatch(requestRenameFolder(node.id, newName))
    setEditName(true);
  }
  function handleChange(e) {
    setNewName(e.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      return handleSubmit(event);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    return dispatch(requestRenameFolder(node.id, newName));
  }

  const children = nodeData[node.id];

  const hasChild = node.id ? true : false;

  return (
    <div
      style={{
        minWidth: '100px',
        maxWidth: '210px',
        margin: '4px 8px'
      }}>
      <div className="tree-folder-inside-modal">
        <div onClick={(e) => setChildVisiblity((v) => !v)}>
          {hasChild && (
            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: '100%',
                alignItems: 'center'
              }}
              className={`${childVisible ? 'active' : ''}`}>
              <img
                className="dropdown-icon"
                onClick={handleClick}
                src={dropdown}
                alt="not-found"></img>
              <div
                onClick={() => onItemClick}
                className={
                  currentFolder?.id == node.id
                    ? 'folder-content-change'
                    : 'folder-content'
                }>
                <img
                  className="folder-icon"
                  src={changeColor ? whiteFolder : folderImg}
                  alt="not-found"></img>
                <div
                  className={editName ? 'folder-name-selected' : 'folder-name'}>
                  {editName ? (
                    <input
                      type="text"
                      onKeyDown={handleKeyDown}
                      defaultValue={node.name}
                      onChange={handleChange}
                    />
                  ) : (
                    node.name
                  )}
                </div>
                <div className="show-icon">
                  <img className="add-icon" src={addIcon} alt=""></img>
                  <img
                    className="edit-icon"
                    onClick={handleEdit}
                    src={edit}
                    alt=""></img>
                  <img
                    className="trash-icon"
                    onClick={deleteFolder}
                    src={trash}
                    alt="not-found"></img>
                </div>
              </div>
            </div>
          )}
          {!hasChild && (
            <div className="inside-folder">
              <div className="folder-content">
                <img
                  className="folder-icon"
                  src={changeColor ? whiteFolder : folderImg}
                  alt=""></img>
                <div className="folder-name">
                  {editName ? (
                    <input
                      className="edit-name"
                      type="text"
                      onKeyDown={handleKeyDown}
                      defaultValue={node.name}
                      onChange={handleChange}
                    />
                  ) : (
                    node.name
                  )}
                </div>
                <div className="show-icon">
                  <img className="add-icon" src={addIcon} alt="not-found"></img>
                  <img
                    className="edit-icon"
                    onClick={handleEdit}
                    src={edit}
                    alt="not-found"></img>
                  <img
                    className="trash-icon"
                    onClick={deleteFolder}
                    src={trash}
                    alt="not-found"></img>
                </div>
              </div>
            </div>
          )}
        </div>

        {hasChild && childVisible && children && (
          <div className="child-folder">
            <Tree folders={children} nodeData={nodeData} />
          </div>
        )}

        {loader && !children && childVisible && (
          <>
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginLeft: '15px', color: 'green' }}
            />
          </>
        )}
      </div>
    </div>
  );
};

function DisplayFolder() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessFolder());
  }, [dispatch]);
  const folders = useSelector((state: StoreState) => {
    return state.userData.folders;
  });

  const nodeData = useSelector((state: StoreState) => {
    return state.userData.node;
  });

  return <Tree folders={folders} nodeData={nodeData} />;
}

export default DisplayFolder;
