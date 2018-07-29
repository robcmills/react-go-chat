import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleOnSubmit(this.state);
  }

  render() {
    const { isLogin, message } = this.props;
    return (
      <form onSubmit={this.handleOnSubmit} >
        <input
          className={cx('input')}
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <input
          className={cx('input')}
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        {message && message.length > 0 && <p className={cx('message')}>{message}</p>}
        <input
          className={cx('button')}
          type="submit"
          value={isLogin ? 'Login' : 'Register'}
        />
      </form>
    );
  }
}

export default LoginForm;
