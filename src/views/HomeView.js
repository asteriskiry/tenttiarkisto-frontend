import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';
import axios from 'axios';

class HomeView extends Component {
  constructor(propr) {
    super(propr);

    this.state = {
      viesti: '',
    };
  }
  render() {
    const viesti = this.state.viesti;
    return (
      <MainComponent>
        <h1>Tenttiarkisto</h1>
          <p>Bäkkäriviesti 😀: <b>{ viesti }</b></p>
      </MainComponent>
    );
  }

  async componentDidMount() {
    try {
      let data = await axios.get('/api/files');
      console.log(data)
      this.setState({
        ...this.state,
        ...{
          viesti: data.data.message,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default HomeView;
