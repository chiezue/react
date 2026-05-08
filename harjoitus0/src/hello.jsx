import * as React from "react";

function Hello({ name }) {
  console.log(`Nimi: ${name}`);
  return <p>Hei {name}!</p>;
}
export default Hello;
