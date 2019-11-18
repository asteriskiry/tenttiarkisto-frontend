import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainComponent from '../components/main/MainComponent.js';
import axios from 'axios';

class CourseView extends Component {
  constructor(propr) {
    super(propr);

    this.state = {
      exams: [],
      courseId: this.props.match.params.id,
    };
  }
  render() {
    const { exams } = this.state;
    const examList = exams.map(exam => (
      <li key={exam.id}>{exam.date}</li>
    ));
    return (
      <MainComponent>
        <h1>Tentti {this.state.courseId}</h1>
        <ul>{examList}</ul>
      </MainComponent>
    );
  }

  async componentDidMount() {
    try {
      let exams = await axios.get('/exampleData/courses/' + this.state.courseId + '.json');
      this.setState({
        ...this.state,
        ...{
          exams: exams.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default CourseView;
