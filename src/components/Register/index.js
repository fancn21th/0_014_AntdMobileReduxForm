import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';
import { WingBlank } from 'antd-mobile';

class Register extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <WingBlank size="md">
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
