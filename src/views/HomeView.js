import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainComponent from '../components/main/MainComponent.js';
import axios from 'axios';

class HomeView extends Component {
  constructor(propr) {
    super(propr);

    this.state = {
      subjects: [],
      courses: [],
    };
  }
  render() {
    const { subjects, courses } = this.state;
    const courseList = courses.map(course => (
      <li key={course.id}><Link to={`/course/${course.id}`}>{course.name}</Link></li>
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
      let subjects = await axios.get('exampleData/subjects.json');
      let courses = await axios.get('exampleData/courses.json');
      this.setState({
        ...this.state,
        ...{
          subjects: subjects.data,
          courses: courses.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default HomeView;
