import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

class ChatContainer extends Component {
  render() {
    return (
      <div className={cx('chat')}>
        Chat
      </div>
    );
  }
}

export default ChatContainer;
