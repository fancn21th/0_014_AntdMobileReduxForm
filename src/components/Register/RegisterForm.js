import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const style = {
      width: '100%',
      height: '50px',
      fontSize: '40px',
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" style={style} />
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
})(RegisterForm);

export default RegisterForm;
