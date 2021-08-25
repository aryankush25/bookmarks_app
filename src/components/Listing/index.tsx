//import React from 'react';
import data from './test';
import f1 from '../../assets/images/folder@3x.png';
import f4 from '../../assets/images/right-arrow-black-triangle copy@3x.png';
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
      {/* <img className="sign2" src={f4} alt=""></img> */}
      <div onClick={(e) => setChildVisiblity((v) => !v)}>
        <br />
        {hasChild && (
          <div className={`${childVisible ? 'active' : ''}`}>
            <img className="sign2" src={f4} alt=""></img>
            <img className="sign1" src={f1} alt=""></img>
            {node.name}
          </div>
        )}
        {!hasChild && (
          <div>
            <img className="sign2" src={f4} alt=""></img>
            <img className="sign1" src={f1} alt=""></img>
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
