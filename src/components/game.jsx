import React from "react";
import Question from "./question";
import Grid from "./grid";
import getPeople from "../service/people";
import getProperties from "./../service/properties";

class Game extends Grid {
  state = {
    people: getPeople(),
    properties: getProperties(),
    remainingCounter: getPeople().length
  };

  render() {
    const { properties, people, remainingCounter } = this.state;
    return (
      <div className="container">
        <Grid data={people} />
        {properties.length >= 1 && remainingCounter > 1 && (
          <Question
            property={properties[0]}
            onClick={(path, value) => this.setProp(path, value)}
          />
        )}
        {properties.length >= 0 && remainingCounter === 1 && (
          <div>You win!</div>
        )}
        {properties.length === 0 && remainingCounter > 1 && (
          <div>You Loose</div>
        )}
      </div>
    );
  }
}

export default Game;
