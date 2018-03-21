// module imports
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  renderField,
  required,
  email
} from 'components/Forms/FormFieldValidation';

import Grid from 'material-ui/Grid';

import { ItemGrid, Button } from 'components';

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

let RecruiterSignupForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form
      id="reruiter-signup-form"
      className="form-horizontal"
      onSubmit={handleSubmit}
    >
      <Grid container direction="column">
        <ItemGrid xs={12} sm={12} md={4}>
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
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
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
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <Field
            required
            fullWidth
            formControl={styles.formControl}
            id="signup-first-name"
            name="first_name"
            label="First Name"
            type="text"
            component={renderField}
            validate={[required]}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <Field
            required
            fullWidth
            formControl={styles.formControl}
            id="signup-last-name"
            name="last_name"
            label="Last Name"
            type="text"
            component={renderField}
            validate={[required]}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <Field
            fullWidth
            formControl={styles.formControl}
            id="signup-contact-number"
            name="contact_number"
            label="Contact Number"
            type="text"
            component={renderField}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <Button
            style={styles.button}
            color="primary"
            type="submit"
            onClick={this.handleSubmit}
            disabled={submitting}
          >
            Register Recruiter
          </Button>
        </ItemGrid>
      </Grid>
    </form>
  );
};

RecruiterSignupForm = reduxForm({
  // a unique name for the form
  form: 'recruiter-signup'
})(RecruiterSignupForm);

export default RecruiterSignupForm;
