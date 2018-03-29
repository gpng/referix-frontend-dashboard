// module imports
import React from "react";
import { Grid } from "material-ui";
import {
  ProfileCard,
  RegularCard,
  Button,
  ItemGrid
} from "components";
import { Field, reduxForm } from "redux-form";
import avatar from "assets/img/faces/marc.jpg";
import { renderField } from "components/Forms/FormFieldValidation";
import TextField from "material-ui/TextField";

// local imports

// style imports
const styles = {
  button: {
    marginTop: 12,
    marginLeft: 8
  }
};

/**
 * Update company profile form
 * @param {object} userDetails Details to be initialized into form
 * @param {function} handleSubmit Submit form handler
 */
class CompanyProfileUpdateForm extends React.Component {

  componentDidMount = () => {
    this.initializeDetails(this.props.userDetails);
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.userDetails !== nextProps.userDetails) {
      this.initializeDetails(nextProps.userDetails);
    }
  };

  initializeDetails = userDetails => {
    let requiredDetails = {
      company_size: this.props.userDetails.company_size,
      company_type: this.props.userDetails.company_type,
      company_website: this.props.userDetails.company_website,
      company_about: this.props.userDetails.company_about,
      company_contact_number: this.props.userDetails.company_contact_number,
      company_location: this.props.userDetails.company_location
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
        style={{ width: "100%" }}
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
                    <Grid style={{marginTop:20}}/>
                    <Grid container>
                      <ItemGrid>
                        <TextField
                          disabled
                          label="Company Name"
                          defaultValue={this.props.userDetails.company_name}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field
                          fullWidth
                          id="company-size"
                          name="company_size"
                          label="Company Size"
                          component={renderField}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field
                          fullWidth
                          id="company-type"
                          name="company_type"
                          label="Company Type"
                          component={renderField}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field

                          fullWidth
                          id="company-website"
                          name="company_website"
                          label="Company Website"
                          component={renderField}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field

                          fullWidth
                          id="company-about"
                          name="company_about"
                          label="Company About"
                          component={renderField}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field

                          fullWidth
                          id="company-location"
                          name="company_location"
                          label="Company Location"
                          component={renderField}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                        <Field

                          fullWidth
                          id="company-contact-number"
                          name="company_contact_number"
                          label="Company Contact Number"
                          component={renderField}
                        />
                      </ItemGrid>
                    </Grid>
                    <Grid container />
                    { /*<Grid container>
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
                    </Grid> */}
                  </div>
                }
                footer={
                  <div>
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
                    <Button
                      style={styles.button}
                      variant="raised"
                      color="primary"
                      type="button"
                      onClick={reset}
                      disabled={pristine || submitting}
                    >
                      Reset
                    </Button>
                  </div>
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

CompanyProfileUpdateForm = reduxForm({
  // a unique name for the form
  form: "company_profile_update"
})(CompanyProfileUpdateForm);

export default CompanyProfileUpdateForm;
