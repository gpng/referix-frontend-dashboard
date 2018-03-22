// module imports
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from 'components/Forms/FormFieldValidation';
import { Button } from 'components';

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

class SearchJobForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form
        id="search-job-form"
        className="form-horizontal"
        onSubmit={handleSubmit}
      >
        <Field
          fullWidth
          formControl={styles.formControl}
          id="search-job-text"
          name="search_job_text"
          label="Search for jobs"
          type="text"
          component={renderField}
          validate={[]}
        />
        <Button
          style={styles.button}
          color="primary"
          type="submit"
          onClick={this.handleSubmit}
          disabled={submitting}
        >
          Search Jobs
        </Button>
      </form>
    );
  }
}

SearchJobForm = reduxForm({
  // a unique name for the form
  form: 'search-job'
})(SearchJobForm);

export default SearchJobForm;
