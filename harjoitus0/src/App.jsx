import * as React from "react";
import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <Tervehdys nimi="Chioma" />

      <OpiskelijaTiedot opiskelija={opiskelija} />

      <Infolista taulukko={tiedot} />
    </div>
  );
}

export default App;
