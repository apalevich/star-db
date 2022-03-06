import React from "react"
import ItemList from "../item-list"
import { withData } from "../hoc-helpers"
import SwapiService from "../../services/swapi-service"

const { getAllPeople, getAllPlanets, getAllStarships  } = new SwapiService()

const withChildren = (Wrapped, renderFn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { renderFn }
      </Wrapped>
    )
  }
}

const renderName = ({name}) => <span>{name}</span>
const renderNameAndModel = ({name, model}) => <span>{name}&nbsp;<sub>({model})</sub></span>

const PersonList = withData(
                          withChildren(ItemList, renderName),
                          getAllPeople)

const PlanetList = withData(
                          withChildren(ItemList, renderName),
                          getAllPlanets)

const StarshipList = withData(
                          withChildren(ItemList, renderNameAndModel),
                          getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}