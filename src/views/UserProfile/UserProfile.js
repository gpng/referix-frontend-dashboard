import React from "react";
import CompanyProfileUpdateForm from "components/Forms/CompanyProfileUpdateForm";
import RecruiterProfileUpdateForm from "components/Forms/RecruiterProfileUpdateForm";
import FlexView from "react-flexview";
import { connect } from 'react-redux';
import * as actions from "actions";
import { toastr } from "react-redux-toastr";
import { cleanObject } from "actions/utilities";
import sysParams from 'sys_params';
import {UserProfileContainer } from "containers/UserProfile/index"


// USE THIS AS THE MAIN PROFILE RENDERING TO SELECT BETWEEN RECRUITER AND COMPANY
/**
 * Update recruiter profile form
 * @param {object} userDetails Details to be initialized into form
 * @param {function} handleSubmit Submit form handler
 */
class UserProfile extends React.Component {
  render() {
    return <UserProfileContainer />;
  }
}

export default UserProfile;
