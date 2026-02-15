import * as React from "react";
import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";
import Linkkilista from "./Linkkilista";
import Kayttajakortti from "./Kayttajakortti";
import Counter from "./Counter"; // uusi kokoava Counter

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
      {/* Tehtävä 1 */}
      <Tervehdys nimi="Chioma" />

      {/* Tehtävä 2 */}
      <OpiskelijaTiedot opiskelija={opiskelija} />

      {/* Tehtävä 3 */}
      <Infolista taulukko={tiedot} />

      {/* Tehtävä 4 */}
      <Linkkilista lista={linkit} />

      {/* Tehtävä 5 */}
      <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />

      {/* Tehtävä 6 – Counter (uusi, painikkeet omissa komponenteissaan) */}
      <Counter />
    </div>
  );
}

export default App;
