// module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

// local imports
import * as actions from 'actions';
import sysParams from 'sys_params';
import HeaderComponent from 'components/Landing/Header';

// style imports

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    };
  }

  handleLogin = async values => {
    const res = await this.props.login(values);
    if (res.success) {
      toast.success('Login successful');
      this.props.history.push('/dashboard');
    } else {
      toast.error('Invalid email or password');
    }
  };

  handleSignup = async values => {
    const res = await this.props.signup(values, sysParams.roles.company);
    if (res.success) {
      this.setState({
        toggle: !this.state.toggle
      });
      toast.success('Signup successful, please log in');
    } else {
      toast.error(res.message);
    }
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <HeaderComponent
        authenticated={this.props.authenticated}
        handleLogin={this.handleLogin}
        handleSignup={this.handleSignup}
        handleLogout={this.handleLogout}
        dialogClose={this.state.toggle}
      />
    );
  }
}

function mapStateToProps({ auth, responsive }) {
  return {
    authenticated: auth.authenticated,
    isMobile: responsive.isMobile
  };
}

export default connect(mapStateToProps, actions)(withRouter(Header));
