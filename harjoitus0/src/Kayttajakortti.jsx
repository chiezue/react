import * as React from "react";
import Tervehdys from "./Tervehdys";
import Infolista from "./Infolista";

function Kayttajakortti({ nimi, lista }) {
  return (
    <div>
      <Tervehdys nimi={nimi} />
      <Infolista taulukko={lista} />
    </div>
  );
}

export default Kayttajakortti;
