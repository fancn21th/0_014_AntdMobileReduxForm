import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';
import i18n from '../../i18n';
import { translate } from 'react-i18next';

class Register extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    const { t } =  this.props;
    return (
      <div>
        {t('firstName')}
        <RegisterForm
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

Register.propTyps = {
}

export default translate()(Register);
