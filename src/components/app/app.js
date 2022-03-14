import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button.js';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

const swapiService = new SwapiService();

export default class App extends Component {

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
    const { showRandomPlanet } = this.state;
    const randomId = Math.floor(Math.random() * 25);

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <Header
              onButtonClick={this.toggleRandomPlanet}
              showRandomPlanet={showRandomPlanet}/>
          <ErrorBoundry>
            { planet }
          </ErrorBoundry>

          <PersonDetails itemId={randomId}/>
          <PlanetDetails itemId={randomId}/>
          <StarshipDetails itemId={randomId}/>

          <PersonList />
          <StarshipList/>
          <PlanetList />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}