import React from "react";
import("./thumbnail.css");

const Thumbnail = ({ name, img, isNotCompsChoice = false, ...rest }) => {
  let renderClass = "card " + (isNotCompsChoice ? " flipped" : "");
  return (
    <div className={renderClass} {...rest}>
      {
        <React.Fragment>
          <img src={img} alt={name} className="card-img-top" />
          <div className="card-body">{name}</div>
        </React.Fragment>
      }
    </div>
  );
};

export default Thumbnail;
