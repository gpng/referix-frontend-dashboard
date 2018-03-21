import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from 'material-ui';
import {
  Person,
  /*Notifications,*/ Dashboard,
  Search
} from 'material-ui-icons';
import { CustomInput, IconButton as SearchButton } from 'components';

import * as actions from 'actions';

import headerLinksStyle from 'variables/styles/headerLinksStyle';

class HeaderLinks extends React.Component {
  state = {
    open: false,
    personOpen: false
  };

  // handleClick = () => {
  //   this.setState({ open: !this.state.open });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  handlePersonClick = () => {
    this.setState({ personOpen: !this.state.personOpen });
  };

  handlePersonClose = () => {
    this.setState({ personOpen: false });
  };

  handleLogout = () => {
    this.props.logout();
  };

  handleClickDashboard = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    const { classes } = this.props;
    const { /*open,*/ personOpen } = this.state;
    return (
      <div>
        <CustomInput
          formControlProps={{
            className: classes.top + ' ' + classes.search
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search'
            }
          }}
        />
        <SearchButton
          color="white"
          aria-label="edit"
          customClass={classes.top + ' ' + classes.searchButton}
        >
          <Search className={classes.searchIcon} />
        </SearchButton>
        <IconButton
          color="inherit"
          aria-label="Dashboard"
          className={classes.buttonLink}
          onClick={this.handleClickDashboard}
        >
          <Dashboard className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </IconButton>
        {/* <Manager style={{ display: 'inline-block' }}>
          <Target>
            <IconButton
              color="inherit"
              aria-label="Notifications"
              aria-owns={open ? 'menu-list' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.buttonLink}
            >
              <Notifications className={classes.links} />
              <span className={classes.notifications}>5</span>
              <Hidden mdUp>
                <p onClick={this.handleClick} className={classes.linkText}>
                  Notification
                </p>
              </Hidden>
            </IconButton>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={
              classNames({ [classes.popperClose]: !open }) +
              ' ' +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow
                in={open}
                id="menu-list"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You're now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager> */}
        <ClickAwayListener onClickAway={this.handlePersonClose}>
          <Manager style={{ display: 'inline-block' }}>
            <Target>
              {' '}
              <IconButton
                color="inherit"
                aria-label="Profile"
                aria-owns={personOpen ? 'person-menu-list' : null}
                aria-haspopup="true"
                onClick={this.handlePersonClick}
                className={classes.buttonLink}
              >
                <Person className={classes.links} />
                <Hidden mdUp>
                  <p className={classes.linkText}>Profile</p>
                </Hidden>
              </IconButton>
            </Target>

            <Popper
              placement="bottom-start"
              eventsEnabled={personOpen}
              className={
                classNames({ [classes.popperClose]: !personOpen }) +
                ' ' +
                classes.pooperResponsive
              }
            >
              <Grow
                in={personOpen}
                id="person-menu-list"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handlePersonClose && this.handleLogout}
                      className={classes.dropdownItem}
                    >
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </Popper>
          </Manager>
        </ClickAwayListener>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(
  connect(null, actions)(withRouter(HeaderLinks))
);
