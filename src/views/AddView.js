import React, { Component } from 'react';
import MainComponent from '../components/main/MainComponent.js';

class AddView extends Component {
  render() {
    return (
      <MainComponent>
        <h1>Lisää tentti</h1>
        <p> Tästä voit lisätä tentin</p>
      </MainComponent>
    );
  }
}

export default AddView;
