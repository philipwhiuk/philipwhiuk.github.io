import React, { Component } from 'react';
import k9GooglePlay from '../k9googlePlay.png';

export default class K9 extends Component {
  render() {
    return (
      <div className="container">
        <h2>K-9 Mail</h2>
        <p>
        <img style={{float: "right", width:"50%"}}
          src={k9GooglePlay} alt="K-9 on the Google Play Store" />
        K-9 Mail is an email application for Android. Distributed on Google Play
        it is the oldest third-party open source email client for Android,
        having been forked from the Android Open Source Project in 2008
        </p>
        <p>
        My main focus is on: IMAP extension support, WebDAV maintenance and
        documentation. I have also spent time improving the project testing
        as well as triaging user reports into valid bugs (and often submitting
          fixes for smaller issues).
        </p>
      </div>
    );
  }
}
