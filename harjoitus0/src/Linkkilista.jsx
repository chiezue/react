import * as React from "react";

function Linkkilista({ lista }) {
  return (
    <ul>
      {lista.map((linkki) => (
        <li key={linkki.id}>
          <a href={linkki.url} target="_blank" rel="noopener noreferrer">
            {linkki.nimi}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Linkkilista;
