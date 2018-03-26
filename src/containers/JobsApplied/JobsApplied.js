import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';

import { withStyles } from 'material-ui';

import * as actions from 'actions';

import { DisplayJobCards } from 'components/JobManagement';

const styles = {};

class JobsAppliedContainer extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      selectedJob: null
    };
  }

  componentDidMount = () => {
    this.getAppliedJobs();
  };

  getAppliedJobs = async () => {
    const res = await this.props.getAllAppliedJobs();
    if (res.success) {
      this.setState({ jobs: orderBy(res.data, ['start_time'], ['desc']) });
    }
  };

  handleOpenJob = job => {
    console.log(job);
  };

  render() {
    return (
      <div>
        {this.state.jobs.length === 0 && 'No active applied jobs'}
        <DisplayJobCards
          jobs={this.state.jobs}
          onOpenJob={this.handleOpenJob}
        />
      </div>
    );
  }
}

JobsAppliedContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, actions)(withStyles(styles)(JobsAppliedContainer));
