import React from "react";

const Question = ({ onClick, property }) => {
  const { path, question } = property;

  return (
    <div>
      <p>{question}</p>
      <button
        className="btn-success btn m-2"
        onClick={() => onClick(path, true)}
      >
        Yes
      </button>
      <button
        className="btn-danger btn m-2"
        onClick={() => onClick(path, false)}
      >
        No
      </button>
    </div>
  );
};

export default Question;
