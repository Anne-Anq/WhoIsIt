import React, { Component } from "react";
import Thumbnail from "./thumbnail";

import("./grid.css");

class Grid extends Component {
  setProp = (path, value) => {
    let { turn } = { ...this.state };

    if (turn % 3 === 1) {
      this.userPlayed(path);
    } else if (turn !== 0 && turn % 3 === 0) {
      this.computerPlayed(path, value);
    }

    turn++;
    this.setState({ turn });
  };
  userPlayed = path => {
    let { compsChoiceProperties, compsOneChoice } = { ...this.state };
    compsChoiceProperties = compsChoiceProperties.filter(
      compsChoiceProp => compsChoiceProp.path !== path
    );
    const compsAnswer = compsOneChoice[path] ? "Yes" : "No";
    this.setState({ compsChoiceProperties, compsAnswer });
  };
  toggleIsNotCompsChoice = person => {
    let { people } = { ...this.state };
    people = people.map(p => {
      if (p.name === person.name) p.isNotCompsChoice = !p.isNotCompsChoice;
      return p;
    });

    this.setState({ people });
  };

  computerPlayed = (path, value) => {
    let { people, usersChoiceProperties, usersChoice } = {
      ...this.state
    };

    people = people.map(p => {
      if (
        p.isNotUsersChoice === false &&
        ((value && p[path] !== value) || (!value && p[path]))
      ) {
        p.isNotUsersChoice = true;
        usersChoice = usersChoice.filter(uChoice => uChoice.name !== p.name);
        Object.keys(p).forEach(prop => {
          if (prop !== "name") {
            usersChoiceProperties.map(property =>
              property.path === prop ? property.numberOfPeople-- : ""
            );
          }
        });
      }
      return p;
    });
    usersChoiceProperties = usersChoiceProperties.filter(
      usersChoiceProp => usersChoiceProp.path !== path
    );
    this.setState({
      people,
      usersChoiceProperties,

      usersChoice
    });
  };
  render() {
    const { people, onClick } = this.props;
    return (
      <div className="grid">
        {people.map((c, i) => {
          return (
            <Thumbnail
              key={i}
              name={c.name}
              img={`pictures/${c.name}.jpg`}
              isNotCompsChoice={c.isNotCompsChoice}
              onClick={() => onClick(c)}
            />
          );
        })}
      </div>
    );
  }
}

export default Grid;
