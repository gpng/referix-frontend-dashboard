// module imports
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  renderField,
  required,
  email
} from 'components/Forms/FormFieldValidation';
import Button from 'material-ui/Button';

// local imports

// style imports

const styles = {
  button: {
    marginTop: 12
  }
};

let LoginForm = props => {
  const { handleSubmit, submitting } = props;

  /* First Required-> Material UI Text validation */
  /* Second Required -> */
  return (
    <form id="signupform" className="form-horizontal" onSubmit={handleSubmit}>
      <Field
        required
        id="signup-email"
        name="username"
        label="Email"
        type="email"
        component={renderField}
        validate={[required, email]}
      />
      <Field
        required
        id="signup-password"
        name="password"
        label="Password"
        type="password"
        component={renderField}
        validate={[required]}
      />
      <Button
        style={styles.button}
        variant="raised"
        color="primary"
        type="submit"
        onClick={this.handleSubmit}
        disabled={submitting}
      >
        Login
      </Button>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

export default LoginForm;
