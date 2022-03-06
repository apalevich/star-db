import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button.js';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';

import './app.css';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

const swapiService = new SwapiService()

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
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = swapiService;
    
    const randomId = Math.floor(Math.random() * 25);
    console.log(randomId)

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

        <PersonDetails itemId={randomId}/>
        <PlanetDetails itemId={randomId}/>
        <StarshipDetails itemId={randomId}/>

        <PersonList>
          {({name}) => { return <span>{name}</span>}}  
        </PersonList>
        <StarshipList>
          {({name}) => { return <span>{name}</span>}}  
        </StarshipList>
        <PlanetList>
          {({name}) => { return <span>{name}</span>}}  
        </PlanetList>

      </ErrorBoundry>
    );
  }
}