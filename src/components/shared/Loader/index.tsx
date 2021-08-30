import React from 'react';
import './styles.scss';

const Loader = (props) => {
  return (
    <div
      style={{ display: props.enabled ? 'block' : 'none' }}
      className="loader"></div>
  );
};

export default Loader;
