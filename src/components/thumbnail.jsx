import React from "react";
import("./thumbnail.css");

const Thumbnail = ({ name, img, isFlipped = false }) => {
  let renderClass = "card " + (isFlipped ? " flipped" : "");
  return (
    <div className={renderClass}>
      {!isFlipped && (
        <React.Fragment>
          <img src={img} alt={name} className="card-img-top" />
          <div className="card-body">{name}</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Thumbnail;
