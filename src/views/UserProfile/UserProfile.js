import React from "react";
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
