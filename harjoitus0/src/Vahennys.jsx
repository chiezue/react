import * as React from "react";

function Vahennys({ setCount }) {
  return <button onClick={() => setCount((prev) => prev - 1)}>Vähennys</button>;
}

export default Vahennys;
