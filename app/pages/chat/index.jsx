import React, { Component } from 'react';
import Page from '../../pages/Page';
import ChatContainer from './container';

class ChatPage extends Component {
  getMetaData = () => {
    return {
      title: 'Chat',
      meta: [{ name: 'description', content: 'Chat page' }],
      link: [],
    };
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <ChatContainer {...this.props} />
      </Page>
    );
  }
}

export default ChatPage;
