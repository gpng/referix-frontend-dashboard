import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';

import { UserManagementCard } from 'components';

import dashboardStyle from 'variables/styles/dashboardStyle';

class UserManagement extends React.Component {
  render() {
    return <UserManagementCard />;
  }
}

UserManagement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(UserManagement);
