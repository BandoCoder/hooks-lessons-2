import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering button - ");
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
