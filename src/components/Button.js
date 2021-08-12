import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);

//React.memo a higher order components that will prevent a functional
//component from rendering when props or state did not change.
