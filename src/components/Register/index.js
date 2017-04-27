import React, { PropTypes } from 'react';
import { InputItem } from 'antd-mobile';
import RegisterForm from './RegisterForm'

class Register extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
      />
    );
  }
}

Register.propTyps = {
}

export default Register;
