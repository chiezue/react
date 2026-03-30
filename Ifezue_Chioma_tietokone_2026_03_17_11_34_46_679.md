Chioma Ifezue
(2026_03_17_11_34_46_679)

# Tehtävä: tietokone


## Tehtävä: Luo tietokone -komponentti
Luo web-komponentti tietokonetietojen näyttämistä varten. Käytettävä tietovarasto välitetään oliolle palvelimelta json-muodossa. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Tietoja saa muuttaa, kunhan rakenne säilyy samanlaisena.

Lisää verkkosivuun ostoskori, johon voit lisätä tietokonetietoja. Sivulla tulee olla myös yhteenveto ostoskorin sisällöstä. Yhteenveto näyttää ostoskorissa olevat tietokoneet ja niiden lukumäärät. Sivulla tulee olla näkyvissä myös korin yhteishinta.

### tietovarasto.json

```json
[
  {
    "id": 1,
    "hinta": 1500,
    "merkki": "MaxEffect 2000",
    "suoritin": "Brain 456",
    "valmistusvuosi": 2005
  },
  {
    "id": 4,
    "hinta": 25,
    "merkki": "BigFlop Mark II",
    "suoritin": "PiiTron 3",
    "valmistusvuosi": 2010
  },
  {
    "id": 2,
    "hinta": 15,
    "merkki": "Cera 2400",
    "suoritin": "MinPower",
    "valmistusvuosi": 2015
  },
  {
    "id": 7,
    "hinta": 25,
    "merkki": "Päärynä Mark II",
    "suoritin": "Seleeni II",
    "valmistusvuosi": 2017
  },
  {
    "id": 6,
    "hinta": 123,
    "merkki": "King 3000",
    "suoritin": "Letni 64",
    "valmistusvuosi": 2017
  },
  {
    "id": 3,
    "hinta": 10,
    "merkki": "Beast II",
    "suoritin": "PiiTron 3",
    "valmistusvuosi": 2011
  }
]
```

# Projekti

## Attribuuttirajapinta
Luo komponentille attribuuttirajapinta, joka reagoi attribuuttien arvojen vaihtumiseen. Valitse seurattaviksi attribuuteiksi mielestäsi olennaiset.

## Javascript rajapinta
Luo komponentille rajapinta javascriptiä varten. Synkronoi se attribuuttirajapinnan kanssa.
- getterit
- setterit
- muut tarvittavat metodit tai luokkafunktiot

## Luo kansio projektille
- nimeä kansio nimellä `Ifezue_Chioma_tietokone`
- luo luokka tietokone tiedostoon tietokonekomponentti.js
- anna elementille nimeksi <tietokone-elementti>
- lisää kansioon pääohjelma
- lisää kansioon tietokone.html tiedosto, jotta komponenttia voi testata
- lisää datapalvelimeen tietovarastoksi **tietokonevarasto**. 


## Palauta projektikansio
Palauta projektikansio erikseen annettavien ohjeiden mukaan. 
