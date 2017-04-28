import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';
import i18n from '../../i18n'

class Register extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
    <div>
      {i18n.t('firstName')}
      <RegisterForm
        onSubmit={this.submit}
      />
    </div>
    );
  }
}

Register.propTyps = {
}

export default Register;
