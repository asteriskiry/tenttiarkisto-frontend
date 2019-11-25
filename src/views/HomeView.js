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
    const courseList = courses.map(course => { return {id: course.id, name: course.name, subject: course.subjectId, numOfExams: 0}});
    return (
      <MainComponent>
        {courseList}
      </MainComponent>
    );
  }

  async componentDidMount() {
    try {
      let subjects = await axios.get('/api/subjects');
      let courses = await axios.get('/api/courses');
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
