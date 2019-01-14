import React from "react";
import "./banner.css";
const Banner = ({ turn }) => {
  return (
    <React.Fragment>
      <nav className="banner">
        <h1 className="title">Who is it?</h1>
        <div className="description">
          Guess the computer's person before it guesses yours
        </div>
      </nav>{" "}
      <div className="alert-container">
        {turn === 1 && (
          <div className="alert alert-info" role="alert">
            Using a dropdown list, ask the computer a question about its
            character's features.
          </div>
        )}
        {turn === 2 && (
          <div className="alert alert-info" role="alert">
            Click on the persons that do not match the computer's description to
            hide them and narrow the selection.
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Banner;
