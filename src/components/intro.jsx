import React from "react";

const Intro = () => {
  return (
    <React.Fragment>
      <p>
        This game's goal is to guess what person the opponent chose. You play
        against the computer.
      </p>
      <p>
        Choose One character and stick to it, the computer will ask you details
        about that person's feature.
      </p>
      <p>
        Using a dropdown list you will also be asking questions to the computer
        about its character's features. Upon its answers click on the persons
        that do not match the computer's description to hide them and narrow the
        selection.
      </p>
    </React.Fragment>
  );
};

export default Intro;
