import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  requestAccessChildfolder,
  requestAccessFolder,
  requestAccessFolderData
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
  const [changeColor, setChangeColor] = useState(false);
  const loader = useSelector(
    (state: StoreState) => state.userData.folderSpinner
  );

  const dispatch = useDispatch();
  function handleClick() {
    return dispatch(requestAccessChildfolder({ id: node['id'] }));
  }

  function dispatchBookmark() {
    return dispatch(requestAccessFolderData(node.id));
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
                alt=""></img>
              <div
                onClick={() => setChangeColor(true)}
                className={
                  changeColor ? 'folder-content-change' : 'folder-content'
                }>
                <img
                  className="folder-icon"
                  src={changeColor ? whiteFolder : folderImg}
                  alt=""></img>
                <div className="folder-name">{node.name}</div>
                <div className="show-icon">
                  <img className="add-icon" src={addIcon} alt=""></img>
                  <img className="edit-icon" src={edit} alt=""></img>
                  <img className="trash-icon" src={trash} alt=""></img>
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
                <div className="folder-name">{node.name}</div>
                <div className="show-icon">
                  <img
                    // style={{ paddingRight: '6px', paddingLeft: '4px' }}
                    className="add-icon"
                    src={addIcon}
                    alt=""></img>
                  <img
                    // style={{ paddingRight: '6px', paddingLeft: '4px' }}
                    className="edit-icon"
                    src={edit}
                    alt=""></img>
                  <img
                    // style={{ paddingRight: '6px', paddingLeft: '4px' }}
                    className="trash-icon"
                    src={trash}
                    alt=""></img>
                </div>
              </div>
            </div>
          )}
        </div>

        {hasChild && childVisible && children && (
          <div>
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
