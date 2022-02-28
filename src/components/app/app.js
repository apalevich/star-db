import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button.js';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import ItemDetails, { Record } from '../item-details';
import Row from '../row';

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
        itemId={4}
        getData={getPerson}
        getImageUrl={getPersonImage}>

          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
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
        <ErrorBoundry>
          { planet }
          <div className="mb2 button-row">
            <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                  Toggle Random Planet
            </button>
            <ErrorButton />
          </div>
        </ErrorBoundry>

        <Row
            left={personDetails}
            right={starshipDetails}
        />

      </ErrorBoundry>
    );
  }
}