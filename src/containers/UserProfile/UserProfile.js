import React from "react";
import {
  CompanyProfileUpdateForm,
  RecruiterProfileUpdateForm,
  PasswordChangeForm
} from "components/Forms";
import FlexView from "react-flexview";
import { connect } from "react-redux";
import * as actions from "actions";
import { toast } from "react-toastify";
import sysParams from "sys_params";

// USE THIS AS THE MAIN PROFILE RENDERING TO SELECT BETWEEN RECRUITER AND COMPANY
/**
 * Update recruiter profile form
 * @param {object} userDetails Details to be initialized into form
 * @param {function} handleSubmit Submit form handler
 */
class UserProfileContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {}
    };
  }

  componentWillMount = () => {
    this.getCurrentUser();
  };

  getCurrentUser = async () => {
    if (!this.props.user) {
      const res = await this.props.getCurrentUser();
      if (res.success) {
        return this.setState({ userDetails: this.props.user });
      }
    }
    return this.setState({ userDetails: this.props.user });
  };

  handleSubmit = async values => {
    const res = await this.props.updateProfile(values);
    if (res.success) {
      toast.success("Profile Updated");
      return this.props.getCurrentUser();
    } else {
      toast.error(res.message);
    }
  };

  handleSubmitPassword = async values => {
    console.log(values);
    const res = await this.props.updatePassword(values);
    if (res.success) {
      toast.success("Password successfully changed");
    } else {
      toast.error(res.message);
    }
  };

  renderForm = () => {
    if (this.state.userDetails.role_id === sysParams.roles.recruiter) {
      return (
        <div>
          <RecruiterProfileUpdateForm
            userDetails={this.state.userDetails}
            onSubmit={this.handleSubmit}
          />
          <PasswordChangeForm onSubmit={this.handleSubmitPassword} />
        </div>
      );
    } else if (this.state.userDetails.role_id === sysParams.roles.company) {
      return (
        <div>
          <CompanyProfileUpdateForm
            userDetails={this.state.userDetails}
            onSubmit={this.handleSubmit}
          />
          <PasswordChangeForm onSubmit={this.handleSubmitPassword} />
        </div>
      );
    }
  };

  render() {
    return <FlexView>{this.renderForm()}</FlexView>;
  }
}

function mapStateToProps({ auth }) {
  return { user: auth.user };
}

export default connect(mapStateToProps, actions)(UserProfileContainer);
