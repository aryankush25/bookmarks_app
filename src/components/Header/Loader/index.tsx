import React from 'react';
import img from '../../../assets/images/spinner.gif';
let Loading = (props) => {
  console.log('props', props);
  return (
    <div style={{ display: props.spinnerEnable ? 'block' : 'none' }}>
      <img src={img} alt="loading" />
      <h1>Loading</h1>
    </div>
  );
};
export default Loading;
