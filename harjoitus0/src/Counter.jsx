import * as React from "react";
import { useState } from "react";
import Kasvatus from "./Kasvatus";
import Vahennys from "./Vahennys";
import Nollaus from "./Nollaus";
import TuplaKasvatus from "./TuplaKasvatus";
import CountNaytto from "./CountNaytto";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <CountNaytto count={count} />

      <Kasvatus setCount={setCount} />
      <Vahennys setCount={setCount} />
      <TuplaKasvatus setCount={setCount} />
      <Nollaus setCount={setCount} />
    </div>
  );
}

export default Counter;
