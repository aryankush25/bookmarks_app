//import React from 'react';
import data from './test';
import folder from '../../assets/images/folder@3x.png';
import dropdown from '../../assets/images/right-arrow-black-triangle copy@3x.png';
import React, { useState } from 'react';
import './style.scss';

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
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <div className="tree-folder">
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
  return <Tree data={data} />;
};
export default FolderChart;
