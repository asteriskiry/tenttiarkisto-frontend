import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import { Form } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi from 'date-fns/locale/fi';
//registerLocale('fi', fi)

class AddView extends Component {
  
  state = {
    startDate: null
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }
  
  render() {
    return (
      <MainComponent>
        <h1>Lisää tentti</h1>
        <p> Tästä voit lisätä tentin</p>

        <Form>
          <Form.Group controlId='SelectCourse'>
            <Form.Label>Valitse kurssi</Form.Label>
            <Form.Control as='select'>
              <option>TRAK</option>
              <option>Insinöörimatematiikka E :D</option>
            </Form.Control>
          </Form.Group>
          
          <Form.Group controlId='selectDate'>
            <DatePicker
                locale='fi'
                selected={this.state.startDate}
                onChange={this.handleChange}
            />

          </Form.Group>
        </Form>

      </MainComponent>
    );
  }
}

export default AddView;
