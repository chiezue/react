import * as React from "react";
import Tervehdys from "./Tervehdys";

// Opiskelijan data
const opiskelija = {
  nimi: "Matti Meikäläinen",
  ika: 16,
  kurssi: "Reactin perusteet",
};

// OpiskelijaTiedot-komponentti
function OpiskelijaTiedot() {
  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Tervehdys nimi="Chioma" />
      <OpiskelijaTiedot />
    </div>
  );
}

export default App;
