import React from 'react';
import './styles.scss';

function SharedContinueButton(props) {
  if (props.buttonType === 'submit') {
    return (
      <input type={props.type} disabled={props.disabled} value={props.value} />
    );
  }
  return (
    <button className="regular-button" onClick={props.function}>
      {props.buttonName}
    </button>
  );
}

export default SharedContinueButton;
