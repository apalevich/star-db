import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';

import { PeoplePage, StarshipPage, PlanetPage, LoginMockup, SecretContent } from '../pages';
import StarshipDetails from '../sw-components/starship-details';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

const swapiService = new SwapiService();

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    isLogged: false
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  onLogin = () => {
    this.setState({
      isLogged: true
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

            <Switch>
              <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
              <Route path='/people/:id?' exact component={PeoplePage}/>
              <Route path='/planets' exact component={PlanetPage}/>
              <Route path='/starships' exact component={StarshipPage}/>
              <Route path='/starships/:id' render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={id}/>
              }}/>
              <Route path="/login" render={() => {
                return (<LoginMockup
                  isLogged={this.state.isLogged}
                  onLogin={this.onLogin}
                />)
              }}/>
              <Route
                path="/secret"
                render={()=>{
                  return (
                    <SecretContent isLogged={this.state.isLogged}/>
                  )
                }}/>
              <Route render={()=>{return (
                <div>
                  <h2>You Lost</h2>
                  <em>Here is your teleport to <a href="/">HOME</a></em>
                </div>
              )}}/>
            </Switch>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}