<<<<<<< HEAD
import React from "react";
import CompanyProfileUpdateForm from "components/Forms/CompanyProfileUpdateForm";
import RecruiterProfileUpdateForm from "views/UserProfile/RecruiterProfileUpdateForm.js";
import FlexView from "react-flexview";
import { connect } from 'react-redux';
import * as actions from "actions";
import { toastr } from "react-redux-toastr";
import { cleanObject } from "actions/utilities";


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
    return (
      <RecruiterProfileUpdateForm
        userDetails={this.state.userDetails}
        onSubmit={this.handleSubmit}
      />
    );
  };

  render() {
    return <FlexView>{this.renderForm()}</FlexView>;
  }
}

function mapStateToProps({ auth }) {
  return { user: auth.user };
=======
import React from 'react';
import { Grid, InputLabel } from 'material-ui';

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from 'components';

import avatar from 'assets/img/faces/marc.jpg';

function UserProfile({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={8}>
        <RegularCard
          cardTitle="Edit Profile"
          cardSubtitle="Complete your profile"
          content={
            <div>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={3}>
                  <CustomInput
                    // labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: '#AAAAAA' }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </ItemGrid>
              </Grid>
            </div>
          }
          footer={<Button color="primary">Update Profile</Button>}
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={4}>
        <ProfileCard
          avatar={avatar}
          subtitle="CEO / CO-FOUNDER"
          title="Alec Thompson"
          description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
          footer={
            <Button color="primary" round>
              Follow
            </Button>
          }
        />
      </ItemGrid>
    </Grid>
  );
>>>>>>> f664bab3d4a6ca81ce40d6855b439fa88d7c2924
}

export default connect(mapStateToProps, actions)(UserProfile);
