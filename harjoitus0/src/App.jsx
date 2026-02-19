import * as React from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";
import Linkkilista from "./Linkkilista";
import Kayttajakortti from "./Kayttajakortti";
import Counter from "./Counter";
import "./index.css";
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
    <div className="container">
      {/* ✅ OSTOSLISTA (AINOA LISTA) */}
      <Header />
      <ShoppingList />

      <hr />

      <h1>React-harjoitukset</h1>

      <h2>Tehtävä 1</h2>
      <Tervehdys nimi="Chioma" />

      <h2>Tehtävä 2</h2>
      <OpiskelijaTiedot opiskelija={opiskelija} />

      <h2>Tehtävä 3</h2>
      <Infolista taulukko={tiedot} />

      <h2>Tehtävä 4</h2>
      <Linkkilista lista={linkit} />

      <h2>Tehtävä 5</h2>
      <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />

      <h2>Tehtävä 6</h2>
      <Counter />
    </div>
  );
}

export default App;
