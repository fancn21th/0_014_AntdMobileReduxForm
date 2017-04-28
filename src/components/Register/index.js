import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    const { t } = this.props;
    return (
    <div>
      {t('common.firstName')}
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
