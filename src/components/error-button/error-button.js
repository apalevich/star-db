import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      // this.foo.bar = 0;
      throw new Error('I can fly!')
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    );
  }
}