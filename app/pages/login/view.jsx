import React from 'react';
import classNames from 'classnames/bind';

import hourGlassSvg from '../../images/hourglass.svg';
import styles from './styles.css';

import LoginForm from './form';

const cx = classNames.bind(styles);

const LoginHeader = ({ toggleLoginMode }) =>
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

const RegisterHeader = ({ toggleLoginMode }) =>
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

const Header = ({ isLogin, toggleLoginMode }) => isLogin ?
  <LoginHeader {...{ toggleLoginMode }} /> :
  <RegisterHeader {...{ toggleLoginMode }} />;

const LoginView = ({
  handleOnSubmit,
  isLogin,
  isWaiting,
  message,
  toggleLoginMode,
}) =>
  <div
    className={cx('login', {
      waiting: isWaiting
    })}
  >
    <div className={cx('container')}>
      <Header {...{ isLogin, toggleLoginMode }} />
      <img className={cx('loading')} alt="loading" src={hourGlassSvg} />
      <div className={cx('email-container')}>
        <LoginForm
          handleOnSubmit={handleOnSubmit}
          isLogin={isLogin}
          message={message}
        />
      </div>
      <div className={cx('google-container')}>
        <h1 className={cx('heading')}>Google Login Demo</h1>
        <a
          className={cx('button')}
          href="/auth/google">Login with Google</a>
      </div>
    </div>
  </div>;

export default LoginView;
