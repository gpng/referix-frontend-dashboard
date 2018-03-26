import React from "react";
import CompanyProfileUpdateForm from "components/Forms/CompanyProfileUpdateForm";
import RecruiterProfileUpdateForm from "components/Forms/RecruiterProfileUpdateForm";
import FlexView from "react-flexview";
import { connect } from 'react-redux';
import * as actions from "actions";
import { toastr } from "react-redux-toastr";
import { cleanObject } from "actions/utilities";
import sysParams from 'sys_params';


// USE THIS AS THE MAIN PROFILE RENDERING TO SELECT BETWEEN RECRUITER AND COMPANY
/**
 * Update recruiter profile form
 * @param {object} userDetails Details to be initialized into form
 * @param {function} handleSubmit Submit form handler
 */
class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {}
    };
  }

  componentWillMount = () => {
    this.getCurrentUser();
  };

  getCurrentUser = async() => {
    if (!this.props.user) {
      const res = await this.props.getCurrentUser();
      if (res.success) {
        return this.setState({ userDetails: this.props.user });
      }
    }
    return this.setState({ userDetails: this.props.user });
  };

  handleSubmit = async values => {
    values = cleanObject(values);
    const res = await this.props.updateProfile(values);
    if (res.success) {
      toastr.success("Profile Updated");
      return this.props.getCurrentUser();
    } else {
      toastr.error("Validation Failed", res.message);
    }
  };

  renderForm = () => {
    if (this.state.userDetails.role_id === sysParams.roles.recruiter) {
      return (
        <RecruiterProfileUpdateForm
          userDetails={this.state.userDetails}
          onSubmit={this.handleSubmit}
        />
      );
    } else if (this.state.userDetails.role_id === sysParams.roles.company) {
      return (
        <CompanyProfileUpdateForm
          userDetails={this.state.userDetails}
          onSubmit={this.handleSubmit}
        />
      );
    }
  };

  render() {
    return <UserProfileContainer />;
  }
}

export default UserProfile;
