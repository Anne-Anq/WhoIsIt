import React from "react";

const ButtonNo = ({ text = "No", type = "danger", ...rest }) => {
  return (
    <button className={`btn-${type} btn m-2}`} {...rest}>
      {text}
    </button>
  );
};
const ButtonYes = ({ text = "Yes", type = "success", ...rest }) => {
  return (
    <button className={`btn-${type} btn m-2}`} {...rest}>
      {text}
    </button>
  );
};

export { ButtonNo, ButtonYes };
