import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { withStyles, MenuItem, Select } from 'material-ui';

import * as actions from 'actions';
import roles from 'variables/roles';

import {
  AdminSignupForm,
  RecruiterSignupForm,
  CompanyCreateForm
} from 'components/Forms';

const styles = {
  select: {
    marginLeft: 8,
    marginBottom: 24,
    width: 200
  }
};

class CreateUser extends Component {
  constructor() {
    super();
    this.state = { role: roles.admin };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async values => {
    const res = await this.props.signup(values, this.state.role);
    if (res.success) {
      toast.success('User successfully created');
      this.setState({ role: roles.admin });
    } else {
      toast.error(res.message);
    }
  };

  renderForm = () => {
    switch (this.state.role) {
      case roles.admin:
        return <AdminSignupForm onSubmit={this.handleSubmit} />;
      case roles.recruiter:
        return <RecruiterSignupForm onSubmit={this.handleSubmit} />;
      case roles.company:
        return <CompanyCreateForm onSubmit={this.handleSubmit} />;
      default:
        return null;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Select
          value={this.state.role}
          inputProps={{ name: 'role', id: 'input-role' }}
          onChange={this.handleChange}
          className={classes.select}
        >
          <MenuItem value={roles.admin}>Admin</MenuItem>
          <MenuItem value={roles.recruiter}>Recruiter</MenuItem>
          <MenuItem value={roles.company}>Company</MenuItem>
        </Select>
        {this.renderForm()}
      </div>
    );
  }
}

CreateUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, actions)(withStyles(styles)(CreateUser));
