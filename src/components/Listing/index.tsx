//import React from 'react';
import data from './test';
import f1 from '../../assets/images/folder@3x.png';
import f2 from '../../assets/images/right-arrow-black-triangle copy 3@3x.png';
import f4 from '../../assets/images/right-arrow-black-triangle copy@3x.png';
import React, { useState } from 'react';
import '../Listing';
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
    <div>
      <div onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && <div className={`${childVisible ? 'active' : ''}`}></div>}
        <br />
        <img className="sign2" src={f4}></img>
        <img className="sign1" src={f1}></img>
        {/* <i className={`${sign2}`}> </i> */}
        {node.name}
        <br />
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
  return (
    <div>
      <Tree data={data} />
    </div>
  );
};
export default FolderChart;
