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
  componentDidMount() {
    let { properties, people } = { ...this.state };
    properties.forEach(property => {
      people.forEach(p =>
        p[property.path] && p[property.path] === true
          ? property.numberOfPeople++
          : ""
      );
    });

    this.setState({ properties });
  }

  findNextProperty(properties, val) {
    properties.sort(
      (a, b) =>
        Math.abs(a.numberOfPeople - val / 2) -
        Math.abs(b.numberOfPeople - val / 2)
    );
    return properties[0];
  }
  render() {
    const { properties, people, remainingCounter } = this.state;

    return (
      <div className="container">
        <Grid data={people} />
        {properties.length >= 1 && remainingCounter > 1 && (
          <Question
            property={this.findNextProperty(properties, remainingCounter)}
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
