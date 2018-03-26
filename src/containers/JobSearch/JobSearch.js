// module imports
import React, { Component } from 'react';
// import Fuse from 'fuse.js';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

// local imports
import * as actions from 'actions';

import { DisplayJobCards } from 'components/JobManagement';
import SearchJobForm from 'components/Forms/SearchJobForm';

// style imports

const PAGE_DISPLAY_LIMIT = 10;

class JobSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      selectedJob: null,
      pages: 0,
      currentPage: 0,
      searchText: null
    };
  }

  handleSubmit = async values => {
    this.setState({
      jobs: [],
      searchText: values.search_job_text
    });
    const res = await this.props.getJobs(values);
    if (res.success) {
      this.setState({
        jobs: values.search_job_text ? res.data.results : [],
        pages: Math.ceil(parseInt(res.data.count, 10) / PAGE_DISPLAY_LIMIT),
        currentPage: values.page ? values.page : 1
      });
    } else {
      return toast.error(res.message);
    }
  };

  handlePageChange = number => {
    if (number !== this.state.currentPage) {
      this.handleSubmit({
        search_job_text: this.state.searchText,
        page: number
      });
    }
  };

  handleApply = async job => {
    const jobId = job.job_id;
    const res = await this.props.applyJob(jobId);
    if (res.success) {
      // route to my jobs page?
      toast.success('Reserved Job Successfully');
    } else {
      toast.error(res.message);
    }
  };

  /**
   * Fuzzy text search
   * Not being used as search done in API now, but keep in case
   * @param {object[]} list
   * @param {string} searchText
   */
  // searchText(list, text) {
  //   const options = {
  //     shouldSort: true,
  //     threshold: 0.1,
  //     location: 0,
  //     distance: 100,
  //     maxPatternLength: 32,
  //     minMatchCharLength: 1,
  //     keys: [
  //       'compensation_benefits',
  //       'job_sector',
  //       'job_skills',
  //       'job_title',
  //       'job_type',
  //       'salary',
  //       'years_of_experience'
  //     ]
  //   };
  //   const fuse = new Fuse(list, options); // "list" is the item array
  //   return fuse.search(text);
  // }

  render() {
    return (
      <div>
        <SearchJobForm onSubmit={this.handleSubmit} />
        <DisplayJobCards
          jobs={this.state.jobs}
          onApply={this.handleApply}
          paginationProps={{
            total: this.state.pages,
            current: this.state.currentPage,
            display: this.state.pages < 5 ? this.state.pages : 5,
            onChange: this.handlePageChange
          }}
        />
      </div>
    );
  }
}

export default connect(null, actions)(JobSearchContainer);
