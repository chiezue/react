import * as React from "react";

function TuplaKasvatus({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 2)}>TuplaKasvatus</button>
  );
}

export default TuplaKasvatus;
