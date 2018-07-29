import React, { Component } from 'react';
import Page from '../../pages/Page';
import LoginContainer from './container';

class LoginPage extends Component {
  getMetaData = () => {
    return {
      title: 'Login',
      meta: [{ name: 'description', content: 'Login or register page' }],
      link: [],
    };
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LoginContainer {...this.props} />
      </Page>
    );
  }
}

export default LoginPage;
