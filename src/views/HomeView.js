import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import axios from 'axios';

class HomeView extends Component {
  constructor(propr) {
    super(propr);

    this.state = {
      subjects: [],
      courses: [],
      exams: [],
    };
  }
  render() {
    const { subjects, courses, exams } = this.state;
    const courseList = courses.map(course => (
      <li key={course.id}>{course.name}</li>
    ));
    return (
      <MainComponent>
        <h1>Tenttiarkisto</h1>
        <h2>Kurssit</h2>
        <ul>{courseList}</ul>
      </MainComponent>
    );
  }

  async componentDidMount() {
    try {
      let subjects = await axios.get('subjects.json');
      let courses = await axios.get('courses.json');
      let exams = await axios.get('exams.json');
      this.setState({
        ...this.state,
        ...{
          subjects: subjects.data,
          courses: courses.data,
          exams: exams.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default HomeView;
