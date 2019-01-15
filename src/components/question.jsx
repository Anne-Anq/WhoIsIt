import React, { Component } from "react";
import { ButtonNo, ButtonYes } from "./common/buttons";

import Intro from "./intro";

class Question extends Component {
  state = {
    value: "Choose a question..."
  };

  startInstruction = ({ onClick }) => {
    return (
      <React.Fragment>
        <Intro />
        <ButtonYes text="I chose someone" onClick={() => onClick()} />
      </React.Fragment>
    );
  };
  usersQuestion = ({ onClick, compsChoiceProperties }) => {
    return (
      <div className="input-group">
        <select
          className="custom-select"
          id="inputGroupSelect04"
          onChange={this.handleChange}
        >
          <option defaultValue>Choose a question...</option>
          {compsChoiceProperties.map((prop, i) => (
            <option key={i} value={i}>
              {prop.question}
            </option>
          ))}
        </select>

        <div className="input-group-append">
          <button
            disabled={!(this.state.value >= 0)}
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              onClick(compsChoiceProperties[this.state.value].path);
              const value = "Choose a question...";
              this.setState({ value });
            }}
          >
            Ask
          </button>
        </div>
      </div>
    );
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  compsAnswer = ({ onClick, compsAnswer }) => {
    return (
      <React.Fragment>
        {compsAnswer}
        <ButtonYes text="Got it!" onClick={() => onClick()} />
      </React.Fragment>
    );
  };
  compsQuestion = ({ onClick, usersChoiceProperties, usersChoice }) => {
    const property = this.findNextProperty(
      usersChoiceProperties,
      usersChoice.length
    );
    const { path, question } = property;
    return (
      <React.Fragment>
        <p>{question}</p>
        <ButtonYes onClick={() => onClick(path, true)} />
        <ButtonNo onClick={() => onClick(path, false)} />
      </React.Fragment>
    );
  };
  findNextProperty(usersChoiceProperties, val) {
    const sortedProperties = usersChoiceProperties.sort(
      (a, b) =>
        Math.abs(a.numberOfPeople - val / 2) -
        Math.abs(b.numberOfPeople - val / 2)
    );
    return sortedProperties[0];
  }
  render() {
    if (this.props.turn === 0) {
      return this.startInstruction(this.props);
    } else if (this.props.turn % 3 === 0) {
      return this.compsQuestion(this.props);
    } else if (this.props.turn % 3 === 1) {
      return this.usersQuestion(this.props);
    } else {
      return this.compsAnswer(this.props);
    }
  }
}

export default Question;
