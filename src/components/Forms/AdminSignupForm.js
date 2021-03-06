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

let AdminSignupForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form
      id="company-signup-form"
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
          <Button
            style={styles.button}
            color="primary"
            type="submit"
            onClick={this.handleSubmit}
            disabled={submitting}
          >
            Register Admin
          </Button>
        </ItemGrid>
      </Grid>
    </form>
  );
};

AdminSignupForm = reduxForm({
  // a unique name for the form
  form: 'admin_signup'
})(AdminSignupForm);

export default AdminSignupForm;
