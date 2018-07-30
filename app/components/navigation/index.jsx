import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { logOut as logOutAction } from '../../actions/users';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) =>
  <nav className={cx('navigation')} role="navigation">
    <Link
      to="/"
      className={cx('item', 'logo')}
      activeClassName={cx('active')}>
      React Go
    </Link>
    {user.authenticated
      ? <Link className={cx('item')} to="/" onClick={logOut}>Logout</Link>
      : <Link className={cx('item')} to="/login">Log in</Link>}
    <Link className={cx('item')} to="/chat">Chat</Link>
    <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
  </nav>;

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut: logOutAction })(Navigation);
