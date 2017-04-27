import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputItemField from '../../antds/InputItemField';
import { Toast } from 'antd-mobile';

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
      <form onSubmit={handleSubmit} style={ {width:'80%'} }>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            label="First Name"
            component={InputItemField}
            type="text" style={style}
            handleErrorClick={this.handleErrorClick}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" style={style} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" style={style} />
        </div>
        <button type="submit" disabled={pristine || submitting} style={style} >Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} style={style} >
          Clear Values
        </button>
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
