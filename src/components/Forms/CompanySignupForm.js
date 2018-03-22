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
  },
  formControl: {
    style: {
      margin: 0
    }
  }
};

let CompanySignupForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form
      id="company-signup-form"
      className="form-horizontal"
      onSubmit={handleSubmit}
    >
      <Field
        required
        fullWidth
        formControl={styles.formControl}
        id="signup-email"
        name="email"
        label="Email"
        type="email"
        component={renderField}
        validate={[required, email]}
      />
      <Field
        required
        fullWidth
        formControl={styles.formControl}
        id="signup-password"
        name="password"
        label="Password"
        type="password"
        component={renderField}
        validate={[required]}
      />
      <Field
        fullWidth
        formControl={styles.formControl}
        id="signup-company-name"
        name="company_name"
        label="Company Name"
        type="text"
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
        Register Company
      </Button>
    </form>
  );
};

CompanySignupForm = reduxForm({
  // a unique name for the form
  form: 'company_signup'
})(CompanySignupForm);

export default CompanySignupForm;
