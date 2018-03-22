// module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

import { Chip, Hidden, Grid } from 'material-ui';

// local imports
import { renderField, required } from 'components/Forms/FormFieldValidation';
import { Button, ItemGrid, CustomInput } from 'components';

// style imports

const styles = {
  button: {
    marginTop: 12
  },
  chip: {
    margin: 4
  },
  formControl: {
    style: {
      margin: 0
    }
  }
};

class PostJobForm extends Component {
  constructor() {
    super();
    this.state = {
      txtChipValue: '',
      chipsValue: '',
      chipsArr: []
    };
  }

  componentDidMount = () => {
    if (this.props.job) {
      this.props.initialize(this.props.job);
      this.setState({
        chipsArr: this.props.job.compensation_benefits.split('|')
      });
      this.props.change(
        'compensation_benefits',
        this.props.job.compensation_benefits
      );
    }
  };

  handleChange = ev => {
    this.setState({
      txtChipValue: ev.target.value
    });
  };

  handleClick = () => {
    if (this.state.txtChipValue !== '') {
      let tempArr = this.state.chipsArr.slice();
      tempArr.push(this.state.txtChipValue);
      this.props.change('compensation_benefits', tempArr.join('|'));
      this.setState({
        chipsArr: tempArr,
        txtChipValue: ''
      });
    }
  };

  handleDelete = key => {
    let tempArr = this.state.chipsArr;
    tempArr.splice(key, 1);
    this.setState({
      chipsArr: tempArr
    });
    this.props.change('compensation_benefits', tempArr.join('|'));
  };

  handleKeyPress = ev => {
    console.log(ev.target);
    ev.preventDefault();
  };

  renderChips = () => {
    let chipsList = [];
    for (let i = 0; i < this.state.chipsArr.length; i++) {
      chipsList.push(
        <Chip
          key={i}
          style={styles.chip}
          label={this.state.chipsArr[i]}
          onDelete={this.handleDelete.bind(this, i)}
        />
      );
    }
    return chipsList;
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form
        id="post-job-form"
        className="form-horizontal"
        onSubmit={handleSubmit}
      >
        <Grid container direction="column">
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-job-title"
              name="job_title"
              label="Job Title"
              type="text"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-job-type"
              name="job_type"
              label="Job Type"
              type="text"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-job-sector"
              name="job_sector"
              label="Job Sector"
              type="text"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-job-skills"
              name="job_skills"
              label="Job Skills"
              type="text"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-years-of-experience"
              name="years_of_experience"
              label="Years of Experience"
              type="number"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-salary"
              name="salary"
              label="Salary"
              type="text"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Compensation & Benefits"
              formControlProps={{
                fullWidth: true,
                style: {
                  margin: 0
                }
              }}
              inputProps={{
                value: this.state.txtChipValue,
                onKeyPress: ev => {
                  if (ev.key === 'Enter') {
                    ev.preventDefault();
                    this.handleClick(ev);
                  }
                },
                onChange: this.handleChange
              }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Button
              color="info"
              onClick={this.handleClick}
              style={styles.button}
            >
              Add
            </Button>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            {this.renderChips()}
            <Hidden xsUp>
              <Field
                required
                id="postjob-compensation-benefits"
                name="compensation_benefits"
                label="Compensation & Benefits"
                type="text"
                component={renderField}
                validate={[required]}
              />
            </Hidden>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-recruiter-limit"
              name="recruiter_limit"
              label="Recruiter Limit (1 - 10)"
              type="number"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              required
              fullWidth
              formControl={styles.formControl}
              id="postjob-cv-limit"
              name="cv_limit"
              label="CV Limit per recruiter (1 - 10)"
              type="number"
              component={renderField}
              validate={[required]}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Button
              style={styles.button}
              color="primary"
              type="submit"
              onClick={handleSubmit}
              disabled={submitting}
            >
              Post Job
            </Button>
          </ItemGrid>
        </Grid>
      </form>
    );
  }
}

PostJobForm = reduxForm({
  // a unique name for the form
  form: 'post-job'
})(PostJobForm);

function mapStateToProps({ responsive }) {
  return { isMobile: responsive.isMobile };
}
export default connect(mapStateToProps, null)(PostJobForm);
