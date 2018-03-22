import React from "react";
import { Grid, InputLabel } from "material-ui";
import * as actions from "actions";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";
import { Field, reduxForm } from "redux-form";
import avatar from "assets/img/faces/marc.jpg";
import { renderField, required } from "components/Forms/FormFieldValidation";
import TextField from "material-ui/TextField";

const styles = {
  button: {
    marginTop: 12,
    marginLeft: 8
  }
};

class RecruiterProfileUpdateForm extends React.Component {
  componentDidMount = () => {
    var requiredDetails = {
      first_name: this.props.userDetails.first_name,
      last_name: this.props.userDetails.last_name,
      contact_number: this.props.userDetails.contact_number
    };
    this.props.initialize(requiredDetails);
  };

  render() {
    const { handleSubmit, submitting, pristine, reset } = this.props;
    return (
      <form
        id="profile-management-form"
        className="form-horizontal"
        onSubmit={handleSubmit}
        style={{width:"100%"}}
      >
        <div>
          <Grid container>
            <ItemGrid xs={12} sm={12} md={8}>
              <RegularCard
                cardTitle="Edit Profile"
                cardSubtitle="Complete your profile"
                content={
                  <div>
                  <Grid container>
                  <ItemGrid xs={12} sm={12}>
                  <TextField
                  fullWidth
                    label="Email"
                    defaultValue={this.props.userDetails.email}
                    disabled
                  />
                  </ItemGrid>
                  </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field
                          required
                          fullWidth
                          id="first-name"
                          name="first_name"
                          label="First Name"
                          component={renderField}
                          validate={[required]}
                        />
                      </ItemGrid>
                      <ItemGrid>
                        <Field
                          required
                          fullWidth
                          id="last-name"
                          name="last_name"
                          label="Last Name"
                          component={renderField}
                          validate={[required]}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid xs={12} sm={12} md={5}>
                        <Field
                          required
                          fullWidth
                          id="contact-number"
                          name="contact_number"
                          label="Contact Number"
                          component={renderField}
                          validate={[required]}
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
                    <Grid container />
                    <Grid container>
                      <ItemGrid xs={12} sm={12} md={12}>
                        <InputLabel style={{ color: "#AAAAAA" }}>
                          About me
                        </InputLabel>
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
                footer={
                  <Button
                    style={styles.button}
                    variant="raised"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    Update Profile
                  </Button>
                }
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
        </div>
      </form>
    );
  }
}
RecruiterProfileUpdateForm = reduxForm({
  // a unique name for the form
  form: "recruiter_profile_update"
})(RecruiterProfileUpdateForm);

export default RecruiterProfileUpdateForm;
