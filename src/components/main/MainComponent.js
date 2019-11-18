import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header/HeaderComponent.js';
import Footer from '../footer/FooterComponent.js';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>{this.props.children}</Container>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
