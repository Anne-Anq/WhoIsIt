import React, { Component } from "react";
import Thumbnail from "./thumbnail";

import("./grid.css");

class Grid extends Component {
  setProp = (path, value) => {
    console.log(path, value);

    let { people, properties, remainingCounter } = { ...this.state };

    people = people.map(p => {
      if (
        p.isFlipped === false &&
        ((value && p[path] !== value) || (!value && p[path]))
      ) {
        p.isFlipped = true;
        remainingCounter--;
      }
      return p;
    });
    properties.shift();
    this.setState({ people, properties, remainingCounter });
  };
  render() {
    const { data } = this.props;
    return (
      <div className="grid">
        {data.map((c, i) => {
          return (
            <Thumbnail
              key={i}
              name={c.name}
              img={`pictures/${c.name}.jpg`}
              isFlipped={c.isFlipped}
            />
          );
        })}
      </div>
    );
  }
}

export default Grid;
