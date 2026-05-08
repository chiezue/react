// Pääohjelma, joka voi ladata tietokonevaraston ja asettaa sen komponentille
fetch("./tietokonevarasto.json")
  .then((res) => res.json())
  .then((data) => {
    const el = document.querySelector("tietokone-komponentti");
    if (el) el.data = data;
  });
