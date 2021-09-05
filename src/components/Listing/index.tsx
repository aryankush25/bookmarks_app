import data from './test';
import folder from '../../assets/images/folder@3x.png';
import dropdown from '../../assets/images/right-arrow-black-triangle copy@3x.png';
import { requestAccessFolder } from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './style.scss';
import { methodOf } from 'lodash';

const Tree = ({ data }) => {
  return (
    <div>
      {data.map((tree) => (
        <TreeNode node={tree} />
      ))}
    </div>
  );
};

const TreeNode = ({ node }) => {
  console.log('node', node);
  const [childVisible, setChildVisiblity] = useState(false);
  const [childfolder, setChildfolder] = useState([]);

  useEffect(() => {
    if (node.id) {
      fetch('https://bookmarks-app-server.herokuapp.com/folders', {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
        },
        method: 'POST',
        body: JSON.stringify({ folderId: node.id })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('childData', data);
          setChildfolder(data);
        });
    }
  }, [node]);

  const hasChild = !!node.children;

  return (
    <div onClick={(e) => setChildfolder(childfolder)} className="tree-folder">
      <div onClick={(e) => setChildVisiblity((v) => !v)}>
        <br />
        {hasChild && (
          <div className={`${childVisible ? 'active' : ''}`}>
            <img className="dropdown-icon" src={dropdown} alt=""></img>
            <img className="folder-icon" src={folder} alt=""></img>
            {node.name}
          </div>
        )}
        {!hasChild && (
          <div>
            <img className="folder-icon" src={folder} alt=""></img>
            {node.name}
          </div>
        )}
      </div>

      {hasChild && childVisible && (
        <div>
          <Tree data={node.children} />
        </div>
      )}
    </div>
  );
};

const FolderChart = () => {
  const [folderdata, setFolderdata] = useState([]);
  const dispatch = useDispatch();
  // dispatch(requestAccessFolder(folderdata));
  useEffect(() => {
    fetch('https://bookmarks-app-server.herokuapp.com/folders', {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzYjY2LWZiMTAtNDkxMC1hNDRhLTZjYWIwZjU2ZTYyZCIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiZXhwIjoxNjM0OTY4NDQwLCJpYXQiOjE2Mjk3ODQ0NDB9.C4w_VXqaFLeab3eATiP-TxIPGjSMBJfFyAFxzyBYqqo'}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('mydata', data);
        setFolderdata(data);
      });
  }, []);
  // console.log('data', data);
  console.log('folderdata', folderdata);
  return <Tree data={folderdata} />;
};
export default FolderChart;
