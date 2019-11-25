import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header/HeaderComponent';
import Footer from '../footer/FooterComponent';
import CourseTable from '../main/CourseTable'

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <CourseTable data={this.props.children} />
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
