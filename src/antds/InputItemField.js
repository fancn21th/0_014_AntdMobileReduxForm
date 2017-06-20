import React from 'react';
import { InputItem } from 'antd-mobile';

const InputItemField = ({ input, label, meta: { touched, error }, ...custom, handleErrorClick }) => {
  return (
    <InputItem
      clear
      placeholder={label}
      autoFocus
      {...input}
      {...custom}
      onErrorClick={() => handleErrorClick(error)}
      error={touched && error}
    >
      {label}
    </InputItem>
  );
};

export default InputItemField;
