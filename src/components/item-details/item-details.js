import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({ field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ field }</span>
    </li>
  )
}

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.state.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    getData(itemId)
    .then(item => {
      this.setState({
        item,
        image: getImageUrl(item),
      })}
    )
    .catch(this.onError)
  }

  layoutItem() {
    const { id, name, gender, birthYear, eyeColor } = this.state.item;

    return (
      <>
        <img className="item-image"
          src={this.state.image} />
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
      </>
    )
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select an item from a list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={this.state.image}
          alt="image of chosen item"/>

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return child
              }) 
            }
          </ul>
        </div>
      </div>
    )
  }
}
