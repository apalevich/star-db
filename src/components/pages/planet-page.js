import React, { Component } from "react";
import Row from "../row";

import { PlanetDetails, PlanetList } from "../sw-components";

export default class PlanetPage extends Component {

  state = {
    selectedItem: null
  }

  render() {
    return (
      <Row
        left={<PlanetList />}
        right={<PlanetDetails itemId={9}/>}
      />
    )
  }

}