import * as React from "react";
import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";

// Opiskelijan data
const opiskelija = {
  nimi: "Matti Meikäläinen",
  ika: 16,
  kurssi: "Reactin perusteet",
};

function App() {
  return (
    <div>
      <Tervehdys nimi="Chioma" />
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
