import React, { Component } from "react";
import Row from "../row";

import { StarshipDetails, StarshipList } from "../sw-components";

export default class StarshipPage extends Component {

  state = {
    selectedItem: null
  }

  render() {
    return (
      <Row
        left={<StarshipList/>}
        right={<StarshipDetails itemId={5}/>}
      />
    )
  }

}