import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button/error-button.js';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import ItemDetails, { Record } from '../item-details';
import Row from '../row';

import './app.css';
import ItemList from '../item-list/item-list';

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

    const personDetails = (
      <ItemDetails
        itemId={randomId}
        getData={getPerson}
        getImageUrl={getPersonImage}>

          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={randomId}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Lenght" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
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

        <ItemList
          getData={swapiService.getAllPeople}>
          { ({name}) => {return <span>{ name }</span>} }
        </ItemList>

        <ItemList
          getData={swapiService.getAllStaships}>
          { ({name}) => {return <span>{ name }</span>} }
        </ItemList>

      </ErrorBoundry>
    );
  }
}