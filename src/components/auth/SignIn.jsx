import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password });
  }

  renderAlert() {
    const { errorMessage } = this.props;
    if (errorMessage == null) {
      return null;
    }
    return (
      <div>
        <span className='SignIn-Form-AsyncErrorMsg'>{errorMessage}</span>
      </div>
    );
  }

  renderSpinner() {
    if (!this.props.isSubmittingAuth) {
      return null;
    }
    return (
      <div className='SignIn-Form-Spinner'>
        <CircularProgress />
      </div>
    );
  }

  renderField({ disabled, input, placeholder, type, meta: { dirty, touched, error } }) {
    return (
      <TextField
        floatingLabelText={placeholder}
        floatingLabelFixed={false}
        {...input}
        type={type}
        errorText={touched && dirty && error}
        disabled={disabled}
      />
    );
  }
  render() {
    const { handleSubmit, isSubmittingAuth } = this.props;
    return (
      <div className={'SignIn'}>
        <h1 className={'SignIn-Message'}>Sign into your <span style={{color:'#32b38c'}}>DEVSPACE</span></h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)} className={'SignIn-Form'}>
          <div>
            <Field name="email" type="email" placeholder="email" component={this.renderField} disabled={isSubmittingAuth}/>
          </div>
          <div>
            <Field name="password" type="password" placeholder="password" component={this.renderField} disabled={isSubmittingAuth}/>
          </div>
          <button action="submit" className="SignIn-Form-SubmitButton" disabled={isSubmittingAuth}>SIGN IN</button>
          {this.renderAlert()}
          {this.renderSpinner()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error,
    isSubmittingAuth: state.auth.isSubmittingAuth
  }
}

SignIn.propTypes = {
  errorMessage: PropTypes.string,
  fields: PropTypes.array,
  handleSubmit: PropTypes.func,
  signInUser: PropTypes.func,
  isSubmittingAuth: PropTypes.bool
}

const validate = ({ password, email }) => {
  const errors = {};

  if (email == null) {
    errors.email = 'Please enter a valid email';
  }
  if (password == null || password.length < 4) {
    errors.password = 'Password should be at least 6 characters long';
  }
  // console.log(errors);
  return errors;
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'form',
  validate
})(SignIn));