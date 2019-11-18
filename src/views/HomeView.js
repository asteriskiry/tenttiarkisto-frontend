import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import axios from 'axios';

class HomeView extends Component {
  constructor(propr) {
    super(propr);

    this.state = {
      exams: [],
    };
  }
  render() {
    const exams = this.state.exams;
    const examList = exams.map(exam => <li key={exam.date}>{exam.course}</li>);
    return (
      <MainComponent>
        <h1>Tenttiarkisto</h1>
        <ul>{examList}</ul>
      </MainComponent>
    );
  }

  async componentDidMount() {
    try {
      let data = await axios.get('tentit.json');
      console.log(data);
      this.setState({
        ...this.state,
        ...{
          exams: data.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default HomeView;
