import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';
import { WingBlank } from 'antd-mobile';
import classes from './index.css'

class Register extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <WingBlank size="md">
        <span className="title">Simple Form</span>
        <RegisterForm
          onSubmit={this.submit}
        />
      </WingBlank>
    );
  }
}

Register.propTyps = {
}

export default Register;
