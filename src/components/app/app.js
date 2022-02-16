import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button.js';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import ItemDetails from '../item-details';
import Row from '../row/row';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  render() { 

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <ErrorBoundry>
        <Header />
        { planet }
        <div className="mb2 button-row">
          <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <Row
            left={personDetails}
            right={starshipDetails}
        />

      </ErrorBoundry>
    );
  }
}