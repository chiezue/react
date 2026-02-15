import * as React from "react";

function Nollaus({ setCount }) {
  return <button onClick={() => setCount(0)}>Nollaus</button>;
}

export default Nollaus;
