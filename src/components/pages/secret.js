import React from "react";
import { Redirect } from "react-router-dom";

const SecretContent = ({isLogged}) => {
  if (isLogged) {
    return (
      <div>
        <h4>Secret facts about SW</h4>
        <ol>
          <li>Star Wars story based on the Hero's Journey writing template that was popularised by Joseph Campbell in his famous book "The Hero with a Thousand Faces" (1949). Learn more about Hero's Journey structure on its <a target="_blank" href="https://en.wikipedia.org/wiki/Hero%27s_journey">Wikipedia page</a> </li>
          <li>Chewbacca's name is a reference to Russian word "Sobaka" that means "Dog"</li>
        </ol>
      </div>
    )
  }

  return (
    <Redirect to="/login"/>
  )
}

export default SecretContent;