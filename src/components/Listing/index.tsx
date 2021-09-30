import folderImg from '../../assets/images/folder@3x.png';
import dropdown from '../../assets/images/right-arrow-black-triangle copy@3x.png';
import {
  requestAccessChildfolder,
  requestAccessFolder,
  requestAccessFolderData
} from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './style.scss';

import StoreState from '../../store/utils/StoreTypes';
import FolderMenu from '../FolderMenu';

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

  const children = nodeData[node.id]; //folderId

  // const result = folders.map((parent) => ({
  //   // Spread properties of the parent
  //   ...parent,

  //   children: child[parent.id]
  // }));

  const hasChild = node.id ? true : false;

  return (
    <div
      style={{
        minWidth: '100px',
        maxWidth: '210px',
        margin: '4px 8px'
      }}>
      <div onClick={dispatchBookmark} className="tree-folder">
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
              <img className="folder-icon" src={folderImg} alt=""></img>
              <div className="folder-name">{node.name}</div>
              <div className="show-three-icon">
                <FolderMenu folders={node} />
              </div>
            </div>
          )}
          {!hasChild && (
            <div className="inside-folder">
              <img className="folder-icon" src={folderImg} alt=""></img>
              <div className="folder-name">{node.name}</div>
            </div>
          )}
        </div>

        {hasChild && childVisible && children && (
          <div>
            <Tree folders={children} nodeData={nodeData} />
            <div className="show-three-icon">
              <FolderMenu folders={node} />
            </div>
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

const FolderChart = () => {
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
  console.log('nodeData', nodeData);
  return <Tree folders={folders} nodeData={nodeData} />;
};
export default FolderChart;
