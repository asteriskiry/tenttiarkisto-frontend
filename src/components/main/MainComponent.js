import React, { useState, useEffect } from 'react'
import Header from '../header/HeaderComponent'
import Footer from '../footer/FooterComponent'
import CourseTable from '../main/CourseTable'
import axios from 'axios'



export default () => {
  const [state, setState] = useState({
    subjects: [],
    courses: []
  })
  useEffect(() => {
    async function fetchData() {
      let subjects = await axios.get('/api/subjects')
      let courses = await axios.get('/api/courses')
      setState({
        subjects: subjects.data,
        courses: courses.data
      })
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      { 
        state && state.courses.length > 0 ? 
        <CourseTable data={{courses: state.courses, subjects: state.subjects}} /> 
        : null 
      }
      <Footer />
    </div>
  )
  
}

/*

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
    console.log(subjects)
    const courseList = courses.map(course => { return {id: course.id, name: course.name, subject: subjects[course.subjectId + 1].name, exams: ['lulz', 'foo bar'], numOfExams: 0}});
    return (
      <MainComponent />
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
*/