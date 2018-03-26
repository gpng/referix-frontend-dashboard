import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import orderBy from 'lodash/orderBy';

import { withStyles } from 'material-ui';

import * as actions from 'actions';

import {
  PostJobDialog,
  EditJobDialog,
  DisplayJobCards
} from 'components/JobManagement';

const styles = {};

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      postToggle: true,
      editToggle: true,
      jobs: [],
      selectedJob: null
    };
  }

  componentDidMount = () => {
    this.getUserJobs();
  };

  getUserJobs = async () => {
    const res = await this.props.getUserJobs();
    if (res.success) {
      this.setState({ jobs: orderBy(res.data, ['updated_at'], ['desc']) });
    }
  };

  handlePostSubmit = async values => {
    if (
      !(values.compensation_benefits && values.compensation_benefits !== '')
    ) {
      return toast.error('Compensation and benefits required');
    }
    const res = await this.props.postJob(values);
    if (res.success) {
      this.handlePostToggle();
      this.getUserJobs();
      return toast.success('Job successfully posted');
    } else {
      return toast.error(res.message);
    }
  };

  handleEditSubmit = async values => {
    const res = await this.props.putJob(values);
    if (res.success) {
      this.handleEditToggle();
      this.getUserJobs();
      return toast.success('Job successfully updated');
    } else {
      return toast.error(res.message);
    }
  };

  handlePostToggle = () => {
    this.setState({ postToggle: !this.state.postToggle });
  };

  handleEditToggle = job => {
    this.setState({ selectedJob: job, editToggle: !this.state.editToggle });
  };

  render() {
    return (
      <div>
        <PostJobDialog
          onSubmit={this.handlePostSubmit}
          dialogClose={this.state.postToggle}
        />
        <EditJobDialog
          onSubmit={this.handleEditSubmit}
          toggle={this.state.editToggle}
          job={this.state.selectedJob}
        />
        <DisplayJobCards
          jobs={this.state.jobs}
          onOpenDialog={this.handleEditToggle}
        />
      </div>
    );
  }
}

CreateUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, actions)(withStyles(styles)(CreateUser));
