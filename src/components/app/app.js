import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';

import { PeoplePage, StarshipPage, PlanetPage  } from '../pages';
import StarshipDetails from '../sw-components/starship-details';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

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

    const planet = this.state.showRandomPlanet ? <RandomPlanet updateInterval={30000}/> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <Router>

            <Header
                onButtonClick={this.toggleRandomPlanet}
                showRandomPlanet={showRandomPlanet}/>
            <ErrorBoundry>
              { planet }
            </ErrorBoundry>

            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
            <Route path='/people/:id?' exact component={PeoplePage}/>
            <Route path='/planets' exact component={PlanetPage}/>
            <Route path='/starships' exact component={StarshipPage}/>
            <Route path='/starships/:id' render={({ match }) => {
              const { id } = match.params;
              return <StarshipDetails itemId={id}/>
            }}/>

          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}