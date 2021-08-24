import React from 'react';
import './styles.scss';

const InputField = (props) => (
  <div className="input-container">
    <input
      style={{ borderBottom: props.errorName ? '1px solid red' : '' }}
      value={props.value}
      type={props.type}
      {...props.register}
      onChange={props.onChangeDefinition}
      autofocus={props.autofocusEnabled ? 'true' : 'false'}
    />
    <label className={props.value && 'filled'}>{props.labelName}</label>
    {props.errorMessageValues && <p>{props.errorMessage}</p>}
  </div>
);

export default InputField;
