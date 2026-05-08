// Tietokone web-komponentti
const defaultData = [
  {
    id: 1,
    hinta: 1500,
    merkki: "MaxEffect 2000",
    suoritin: "Brain 456",
    valmistusvuosi: 2005,
  },
  {
    id: 4,
    hinta: 25,
    merkki: "BigFlop Mark II",
    suoritin: "PiiTron 3",
    valmistusvuosi: 2010,
  },
  {
    id: 2,
    hinta: 15,
    merkki: "Cera 2400",
    suoritin: "MinPower",
    valmistusvuosi: 2015,
  },
  {
    id: 7,
    hinta: 25,
    merkki: "Päärynä Mark II",
    suoritin: "Seleeni II",
    valmistusvuosi: 2017,
  },
  {
    id: 6,
    hinta: 123,
    merkki: "King 3000",
    suoritin: "Letni 64",
    valmistusvuosi: 2017,
  },
  {
    id: 3,
    hinta: 10,
    merkki: "Beast II",
    suoritin: "PiiTron 3",
    valmistusvuosi: 2011,
  },
];

class TietokoneKomponentti extends HTMLElement {
  static get observedAttributes() {
    return ["data", "cart"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._data = defaultData;
    this._cart = [];
    this.render();
  }

  get data() {
    return this._data;
  }
  set data(val) {
    this._data = Array.isArray(val) ? val : defaultData;
    this.render();
  }

  get cart() {
    return this._cart;
  }
  set cart(val) {
    this._cart = Array.isArray(val) ? val : [];
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data") {
      try {
        this.data = JSON.parse(newValue);
      } catch {
        this.data = defaultData;
      }
    }
    if (name === "cart") {
      try {
        this.cart = JSON.parse(newValue);
      } catch {
        this.cart = [];
      }
    }
  }

  addToCart(id) {
    const item = this._data.find((t) => t.id === id);
    if (!item) return;
    const idx = this._cart.findIndex((c) => c.id === id);
    if (idx > -1) {
      this._cart[idx].count++;
    } else {
      this._cart.push({ ...item, count: 1 });
    }
    this.setAttribute("cart", JSON.stringify(this._cart));
    this.render();
  }

  getCartSummary() {
    let total = 0;
    let items = this._cart.map((c) => {
      total += c.hinta * c.count;
      return `${c.merkki} (${c.count} kpl)`;
    });
    return { items, total };
  }

  render() {
    const style = `<style>
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ccc; padding: 6px; }
      button { margin: 2px; }
      .cart-summary { margin-top: 1em; background: #f8f8f8; padding: 1em; border-radius: 6px; }
    </style>`;
    const tableRows = this._data
      .map(
        (t) =>
          `<tr><td>${t.merkki}</td><td>${t.suoritin}</td><td>${t.valmistusvuosi}</td><td>${t.hinta} €</td><td><button data-id="${t.id}">Lisää koriin</button></td></tr>`,
      )
      .join("");
    const { items, total } = this.getCartSummary();
    const cartHtml = `<div class="cart-summary"><b>Ostoskori:</b><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul><b>Yhteishinta:</b> ${total} €</div>`;
    this.shadowRoot.innerHTML = `${style}<table><thead><tr><th>Merkki</th><th>Suoritin</th><th>Vuosi</th><th>Hinta</th><th></th></tr></thead><tbody>${tableRows}</tbody></table>${cartHtml}`;
    this.shadowRoot.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.onclick = () => this.addToCart(Number(btn.getAttribute("data-id")));
    });
  }
}

customElements.define("tietokone-komponentti", TietokoneKomponentti);
