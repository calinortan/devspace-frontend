import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TextField from 'material-ui/TextField';

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

  renderField({ input, placeholder, type, meta: { dirty, touched, error } }) {
    return (
      <TextField
        floatingLabelText={placeholder}
        floatingLabelFixed={false}
        {...input}
        type={type}
        errorText={touched && dirty && error}
      />
    );
  }
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className={'SignIn'}>
        <h1 className={'SignIn-Message'}>Sign into your <span style={{color:'#32b38c'}}>DEVSPACE</span></h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)} className={'SignIn-Form'}>
          <div>
            <Field name="email" type="email" placeholder="email" component={this.renderField} />
          </div>
          <div>
            <Field name="password" type="password" placeholder="password" component={this.renderField} autoComplete='false'/>
          </div>
          <button action="submit" className="SignIn-Form-SubmitButton" disabled={submitting}>SIGN IN</button>
          {this.renderAlert()}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error
  }
}

SignIn.propTypes = {
  errorMessage: React.PropTypes.string,
  fields: React.PropTypes.array,
  handleSubmit: React.PropTypes.func,
  signInUser: React.PropTypes.func,
  submitting: React.PropTypes.bool
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