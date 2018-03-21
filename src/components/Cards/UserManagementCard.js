import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Tabs,
  Tab
} from 'material-ui';
import { Create, Spellcheck } from 'material-ui-icons';

import { Tasks } from 'components';

import { website } from 'variables/general';

import { CreateUser } from 'containers/UserManagement';

import tasksCardStyle from 'variables/styles/tasksCardStyle';

class UserManagementCard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          action={
            <Tabs
              classes={{
                flexContainer: classes.tabsContainer
              }}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorClassName={classes.displayNone}
              textColor="inherit"
            >
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<Create className={classes.tabIcon} />}
                label={'Create'}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<Spellcheck className={classes.tabIcon} />}
                label={'Approve'}
              />
            </Tabs>
          }
        />
        <CardContent>
          {this.state.value === 0 && <CreateUser />}
          {this.state.value === 1 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={website}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

UserManagementCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksCardStyle)(UserManagementCard);
