import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class FooterComponent extends Component {
  render() {
    return (
      <Alert variant='danger'>
        Tähän joku järkevä footeri <span role="img">😁</span>
      </Alert>
    );
  }
}

export default FooterComponent;
