import React from 'react';
import classNames from 'classnames/bind';
import Navigation from '../components/navigation';
import Message from '../containers/Message';
import styles from '../css/main.css';

const cx = classNames.bind(styles);

const App = ({ children }) => {
  return (
    <div className={cx('app')}>
      <Navigation />
      <Message />
      {children}
    </div>
  );
};

export default App;
