// module imports
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, required } from 'components/Forms/FormFieldValidation';
import { Grid } from "material-ui";
import {
  ProfileCard,
  RegularCard,
  Button,
  ItemGrid
} from "components";
// local imports

// style imports

const styles = {
  button: {
    marginTop: 12
  }
};

class PasswordChangeForm extends React.Component{
  render(){
  const { handleSubmit,submitting } = this.props;
  return(
        <form
        id="change-password-form"
        onSubmit={handleSubmit}
        >
        <div>
          <Grid container>
            <ItemGrid xs={12} sm={12} md={8}>
              <RegularCard
                cardTitle="Change Your Password"
                cardSubtitle="Complete this to change your password"
                content={
                  <div>
                    <Grid container>
                      <ItemGrid style={{width:"80%"}}>
                      <Field
                        required
                        id="current-password"
                        name="old_password"
                        label="Current Password"
                        type="password"
                        component={renderField} // Make a call so to make sure current password is valid
                      />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                      <ItemGrid>
                      <Field
                        required
                        id="new-password"
                        name="new_password"
                        label="New Password"
                        type="password"
                        component={renderField}// Making sure not same as current password
                      />
                      </ItemGrid>
                    </Grid>
                    <Grid container>
                    <ItemGrid>
                      <Field
                        required
                        id="confirmnew-password"
                        name="confirm_new_password"
                        label="Confirm New Password"
                        type="password"
                        component={renderField}// Making sure same as the password above
                      />
                      </ItemGrid>
                      </Grid>
                    <Grid container />
                    {/*<Grid container>
                      <ItemGrid xs={12} sm={12} md={12}>
                        <InputLabel style={{ color: '#AAAAAA' }}>
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
                    </Grid>*/}
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
                    >
                      Change Password
                    </Button>
                  </div>
                }
                />
                </ItemGrid>
                </Grid>
                </div>
        </form>
  )
}
}

PasswordChangeForm = reduxForm({
  // a unique name for the form
  form: 'password_change'
})(PasswordChangeForm);

export default PasswordChangeForm;
