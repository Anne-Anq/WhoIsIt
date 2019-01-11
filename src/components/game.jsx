import React from "react";
import Question from "./question";
import Grid from "./grid";
import { getPeople, getOnePerson } from "../service/people";
import getProperties from "./../service/properties";

class Game extends Grid {
  state = {
    people: [],
    usersChoiceProperties: "",
    compsChoiceProperties: "",
    usersChoice: "",
    compsOneChoice: "",
    compsAnswer: "",
    turn: 0
  };
  componentDidMount() {
    const people = getPeople();
    let usersChoiceProperties = getProperties();
    usersChoiceProperties.forEach(property => {
      people.forEach(p =>
        p[property.path] && p[property.path] === true
          ? property.numberOfPeople++
          : ""
      );
    });
    const compsChoiceProperties = getProperties();
    const usersChoice = getPeople();
    const compsOneChoice = getOnePerson();

    this.setState({
      people,
      usersChoiceProperties,
      compsChoiceProperties,
      usersChoice,
      compsOneChoice
    });
  }

  render() {
    const { usersChoiceProperties, usersChoice } = this.state;

    return (
      <div className="container">
        <Grid
          {...this.state}
          onClick={person => this.toggleIsNotCompsChoice(person)}
        />
        {usersChoiceProperties.length >= 1 && usersChoice.length > 1 && (
          <Question
            {...this.state}
            onClick={(path, value) => this.setProp(path, value)}
          />
        )}
        {usersChoiceProperties.length >= 0 && usersChoice.length === 1 && (
          <div>
            The computer guessed, it was {usersChoice[0].name}. You loose!
          </div>
        )}
        {usersChoiceProperties.length === 0 && usersChoice.length > 1 && (
          <div>You Loose</div>
        )}
      </div>
    );
  }
}

export default Game;
