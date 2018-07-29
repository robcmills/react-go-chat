import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  manualLogin as manualLoginAction,
  signUp as signUpAction,
  toggleLoginMode as toggleLoginModeAction,
} from '../../actions/users';
import LoginView from './view';

class LoginContainer extends Component {
  handleOnSubmit = ({ email, password }) => {
    const { manualLogin, signUp, user: { isLogin } } = this.props;

    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
  }

  render() {
    const {
      toggleLoginMode,
      user: { isWaiting, message, isLogin },
    } = this.props;
    return (
      <LoginView
        {...{
          isWaiting,
          message,
          isLogin,
          handleOnSubmit: this.handleOnSubmit,
          toggleLoginMode,
        }}
      />
    );
  }
}

LoginContainer.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, {
  manualLogin: manualLoginAction,
  signUp: signUpAction,
  toggleLoginMode: toggleLoginModeAction,
})(LoginContainer);

