import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorButton from '../error-button/error-button.js';
import SwapiService from '../../services/swapi-service';

//Temp
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    loaded: false,
    hasError: false,
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  render() { 
    if (!this.state.loaded) {
      return <Spinner/>
    }

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <div>
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

        <PeoplePage/>

        <div className="row mb2">
            <div className="col-md-6">
                <ItemList
                  onItemSelected={this.onPersonSelected}
                  getData={this.swapiService.getAllPlanets}
                  renderItems={ ({name, population}) => {
                      return (
                        <span>{name}&emsp;<sub>population: {population}</sub></span>
                      )
                    }
                  }
                />
            </div>
            <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        </div>

      </div>
    );
  }
}