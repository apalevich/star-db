import React from "react"
import ItemList from "../item-list"
import { withData, withSwapiService } from "../hoc-helpers"

const withChildFunction = (Wrapped, renderFn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { renderFn }
      </Wrapped>
    )
  };
};

const renderName = ({name}) => <span>{name}</span>
const renderNameAndModel = ({name, model}) => <span>{name}&nbsp;<sub>({model})</sub></span>

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderName)),
                      mapPersonMethodsToProps);

const PlanetList =  withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderName)),
                      mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                          withData(
                            withChildFunction(ItemList, renderNameAndModel)),
                      mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}