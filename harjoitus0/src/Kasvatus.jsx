import * as React from "react";

function Kasvatus({ setCount }) {
  return <button onClick={() => setCount((prev) => prev + 1)}>Kasvatus</button>;
}

export default Kasvatus;
