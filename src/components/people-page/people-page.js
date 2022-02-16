import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row/row";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (<ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItems={ ({name, birthYear, gender}) => {
                return (
                    <span>{name}&emsp;<sub>{gender}, {birthYear}</sub></span>
                )
            } }
        />)

        const ItemDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={ItemDetails}/>
        )
    }
}
