import React from 'react';

const InputField = ({ label, type, style, autofocus }) => (
  <div className="input-field">
    <label>{label}</label>
    <input style={style} autoFocus={autofocus} />
  </div>
);

export default InputField;
