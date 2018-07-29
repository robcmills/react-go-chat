import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  manualLogin as manualLoginAction,
  signUp as signUpAction,
  toggleLoginMode as toggleLoginModeAction,
} from '../../actions/users';
import styles from './styles.css';
import hourGlassSvg from '../../images/hourglass.svg';

const cx = classNames.bind(styles);

class LoginContainer extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();

    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
  }

  renderHeader() {
    const { user: { isLogin }, toggleLoginMode } = this.props;
    if (isLogin) {
      return (
        <div className={cx('header')}>
          <h1 className={cx('heading')}>Login with Email</h1>
          <div className={cx('alternative')}>
            Not what you want?
            <a
              className={cx('alternative-link')}
              onClick={toggleLoginMode}
            >Register an Account</a>
          </div>
        </div>
      );
    }

    return (
      <div className={cx('header')}>
        <h1 className={cx('heading')}>Register with Email</h1>
        <div className={cx('alternative')}>
          Already have an account?
          <a
            className={cx('alternative-link')}
            onClick={toggleLoginMode}
          >Login</a>
        </div>
      </div>
    );
  }

  render() {
    const { isWaiting, message, isLogin } = this.props.user;

    return (
      <div
        className={cx('login', {
          waiting: isWaiting
        })}
      >
        <div className={cx('container')}>
          { this.renderHeader() }
          <img className={cx('loading')} alt="loading" src={hourGlassSvg} />
          <div className={cx('email-container')}>
            <form onSubmit={this.handleOnSubmit}>
              <input
                className={cx('input')}
                type="email"
                ref="email"
               placeholder="email"
              />
              <input
                className={cx('input')}
                type="password"
                ref="password"
                placeholder="password"
              />
              <div className={cx('hint')}>
                <div>Hint</div>
                <div>email: example@ninja.com password: ninja</div>
              </div>
              <p
                className={cx('message', {
                'message-show': message && message.length > 0
              })}>{message}</p>
              <input
                className={cx('button')}
                type="submit"
                value={isLogin ? 'Login' : 'Register'} />
            </form>
          </div>
          <div className={cx('google-container')}>
            <h1 className={cx('heading')}>Google Login Demo</h1>
            <a
              className={cx('button')}
              href="/auth/google">Login with Google</a>
          </div>
        </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, {
  manualLogin: manualLoginAction,
  signUp: signUpAction,
  toggleLoginMode: toggleLoginModeAction,
})(LoginContainer);

