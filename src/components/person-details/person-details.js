import React, { Component, Fragment } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId != prevProps.personId) {
      this.updatePerson(this.props.personId)
      this.setState({loading:true})
    }
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updatePerson() {
    const { personId } = this.props;
    
    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false,
        })}
      )
      .catch(this.onError)
  }

  layoutPerson() {
    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }

  render() {

    const { person, loading, error } = this.state;
    let content;

    if (!person) {
      content = <span>Please select a person from list</span>;
    } else if (error) {
      content = <ErrorIndicator/>
    } else if (loading) {
      content = <Spinner/>
    } else {
      content = this.layoutPerson()
    }

    

    return (
      <div className="person-details card">
        { content }
      </div>
    )
  }
}
