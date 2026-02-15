import * as React from "react";

function Infolista({ taulukko }) {
  return (
    <ul>
      {taulukko.map((asia, index) => (
        <li key={index}>{asia}</li>
      ))}
    </ul>
  );
}

export default Infolista;
