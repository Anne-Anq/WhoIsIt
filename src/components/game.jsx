import React from "react";
import Question from "./question";
import Grid from "./grid";
import Banner from "./banner";
import {
  getNumOfPeople,
  getPeopleAndAttr,
  getOnePerson,
  clone
} from "../service/people";
import getProperties from "./../service/properties";
import { ButtonYes } from "./common/buttons";

class Game extends Grid {
  state = {
    people: [],
    usersChoiceProperties: "",
    compsChoiceProperties: "",
    usersChoice: "",
    compsPossibleChoices: "",
    compsOneChoice: "",
    compsAnswer: "",
    turn: 0
  };
  componentDidMount() {
    const randomPeopleSelection = getNumOfPeople(this.maxImgBySize());
    const people = getPeopleAndAttr(clone(randomPeopleSelection));
    const usersChoiceProperties = getProperties(randomPeopleSelection);
    const compsChoiceProperties = clone(usersChoiceProperties);
    const usersChoice = randomPeopleSelection;
    const compsPossibleChoices = randomPeopleSelection;
    const compsOneChoice = getOnePerson(randomPeopleSelection);
    const turn = 0;

    this.setState({
      people,
      usersChoiceProperties,
      compsChoiceProperties,
      usersChoice,
      compsPossibleChoices,
      compsOneChoice,
      turn
    });
  }
  maxImgBySize = () => {
    const width = document.querySelector("#grid").clientWidth;
    const margin = width < 450 ? 2 : 10;
    const cardWidth = 2 * margin + (width < 450 ? 80 : 140);
    const bannerHeight = document.querySelector(".banner").clientHeight;
    const alertHeight = document.querySelector(".alert-container").clientHeight;
    const bottomHeight = document.querySelector(".bottom-part").clientHeight;
    const height =
      window.innerHeight - bannerHeight - alertHeight - bottomHeight;
    const cardHeight = 2 * margin + (width < 450 ? 100 : 175);

    const cardsInWidth = Math.floor(width / cardWidth);
    const cardsInHeight = Math.floor(height / cardHeight);

    return cardsInWidth * cardsInHeight;
  };
  renderComputerWins = name => {
    return (
      <React.Fragment>
        The computer guessed, it was {name}. You loose!{this.renderPlayAgain()}
      </React.Fragment>
    );
  };
  renderCorrectGuess = name => {
    return (
      <React.Fragment>
        Good job, it was indeed {name}. You win!{this.renderPlayAgain()}
      </React.Fragment>
    );
  };

  renderWrongGuess = name => {
    return (
      <React.Fragment>
        Nope, it's not {name}. Unselect someone else to keep playing and try
        again!}
      </React.Fragment>
    );
  };
  renderPlayAgain = () => {
    return (
      <ButtonYes
        text="Play Again?"
        onClick={() => {
          this.componentDidMount();
        }}
      />
    );
  };

  renderGameOver = () => {
    const { usersChoice, compsPossibleChoices, compsOneChoice } = this.state;

    if (usersChoice.length === 1)
      return this.renderComputerWins(usersChoice[0].name);
    else if (compsPossibleChoices[0].name === compsOneChoice.name)
      return this.renderCorrectGuess(compsOneChoice.name);
    else return this.renderWrongGuess(compsPossibleChoices[0].name);
  };
  render() {
    const { usersChoice, compsPossibleChoices, turn } = this.state;

    return (
      <React.Fragment>
        <Banner turn={turn} />
        <div className="container">
          <Grid
            {...this.state}
            onClick={person => this.toggleIsNotCompsChoice(person)}
          />
          <div className="bottom-part">
            {(compsPossibleChoices.length > 1 || turn % 3 === 0) &&
              usersChoice.length > 1 && (
                <Question
                  {...this.state}
                  onClick={(path, value) => this.setProp(path, value)}
                />
              )}
            {((compsPossibleChoices.length === 1 && turn % 3 !== 0) ||
              usersChoice.length === 1) &&
              this.renderGameOver()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
