import React, { Component } from "react";
import Row from "../row";

import { PersonDetails, PersonList } from "../sw-components";

export default class PeoplePage extends Component {

  state = {
    selectedItem: null
  }

  render() {
    return (
      <Row
        left={<PersonList />}
        right={<PersonDetails itemId={3}/>}
      />
    )
  }

}