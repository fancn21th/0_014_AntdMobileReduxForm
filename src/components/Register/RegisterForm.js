import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputItemField from '../../antds/InputItemField';
import { Toast, WhiteSpace, Button } from 'antd-mobile';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
};


const asyncValidate = (values) => {
  return sleep(1000).then(() => { // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
      throw { firstName: 'That firstName is taken' };
    }
  });
};

class RegisterForm extends Component {

  handleErrorClick = (error) => {
    Toast.info(error)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const style = {
      width: '100%',
      height: '50px',
      fontSize: '40px',
    };
    return (
      <form onSubmit={handleSubmit} style={ {width:'90%'} }>
        <div>
          <Field
            name="firstName"
            label="First Name"
            component={InputItemField}
            type="text"
            style={style}
            handleErrorClick={this.handleErrorClick}
          />
        </div>
        <WhiteSpace size='md' />
        <div>
          <Field
            name="lastName"
            label="Last Name"
            component={InputItemField}
            type="text"
            style={style}
            handleErrorClick={this.handleErrorClick}
          />
        </div>
        <WhiteSpace size='md' />
        <div>
          <Field
            name="email"
            label="Email"
            component={InputItemField}
            type="text"
            style={style}
            handleErrorClick={this.handleErrorClick}
          />
        </div>
        <WhiteSpace size='md' />
        <Button
          className="btn"
          type="primary"
          onClick={handleSubmit}
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <WhiteSpace size='md' />
        <Button
          className="btn"
          onClick={reset}
          disabled={pristine || submitting}
        >
          Clear Values
        </Button>
      </form>
    );
  }
}

RegisterForm.propTyps = {
  handleSubmit: PropTypes.func.isRequired,
}

// Decorate the form component
RegisterForm = reduxForm({
  form: 'register', // a unique name for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['firstName'],
})(RegisterForm);

export default RegisterForm;
