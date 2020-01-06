import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import { Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi from 'date-fns/locale/fi';
import axios from 'axios';

//registerLocale('fi', fi)

class AddView extends Component {
  constructor(propr) {
    super(propr);

    this.state = {
      subjects: [],
      courses: [],
      startdate: null,
    }
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


  handleChange = date => {
    this.setState({
      startDate: date
    })
  }
  
  render() {
    const {courses} = this.state;
    return (
      <MainComponent>
        <h1>Lisää tentti</h1>
        <p> Tästä voit lisätä tentin</p>

        <Form>
          <Form.Group controlId='SelectCourse'>
            <Form.Label>Valitse kurssi</Form.Label>
            <Form.Control as='select'>
              {courses.map(course => (
                <option>{course.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          
          <Form.Group controlId='selectDate'>
            <Form.Label>Tentin päivämäärä:</Form.Label>
              <br />
              <DatePicker
                  locale='fi'
                  selected={this.state.startDate}
                  onChange={this.handleChange}
              /> <br />
            <Form.Label>Tentin tyyppi:</Form.Label>
            <br />
       
            <Form.Check inline type='radio' label='Tentti' name='examTypeSelect' id='tentti' />
            <Form.Check inline type='radio' label='Välikoe' name='examTypeSelect' id='valikoe' />
            <br />
            <label>Valitse tenttitiedosto: </label>            
            <br />
            <input type='file' />

          </Form.Group>

          
        </Form>


        <Button variant='outline-primary'>Lähetä tentti</Button>

      </MainComponent>
    );
  }
}

export default AddView;
