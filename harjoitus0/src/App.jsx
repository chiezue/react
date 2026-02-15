import * as React from "react";
import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";
import Linkkilista from "./Linkkilista";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  const tiedot = ["React", "JavaScript", "CSS"];

  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];

  return (
    <div>
      <Tervehdys nimi="Chioma" />

      <OpiskelijaTiedot opiskelija={opiskelija} />

      <Infolista taulukko={tiedot} />

      <Linkkilista lista={linkit} />
    </div>
  );
}

export default App;
