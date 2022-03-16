import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service.js'
import Spinner from '../spinner/spinner.js';
import ErrorIndicator from '../error-indicator/error-indicator.js';

import './random-planet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 7000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    hasError: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => {this.updatePlanet()}, this.props.updateInterval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  componentDidCatch() {
    this.setState({
      loading: false,
      hasError: true
    })
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  updatePlanet() {
    this.setState({
      loading: true
    });
    const id = Math.ceil(Math.random()*21);

    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  }

  render() {
    const { planet, loading, hasError } = this.state;

    const content = loading ? <Spinner/> : hasError ? <ErrorIndicator/> : <PlanetView planet={planet}/>

    return (
      <div className="random-planet jumbotron rounded">
        { content }
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}
