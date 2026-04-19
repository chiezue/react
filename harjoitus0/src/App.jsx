import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./Header";
import ShoppingList from "./ShoppingList";
import PostList from "./PostList";

import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";
import Infolista from "./Infolista";
import Linkkilista from "./Linkkilista";
import Kayttajakortti from "./Kayttajakortti";
import Counter from "./Counter";
import KayttajaHaku from "./KayttajaHaku";
import KayttajaJaPostaukset from "./KayttajaJaPostaukset";

import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
import AddItem from "./AddItem";
import EditItem from "./EditItem";

import "./app.css";

export default function App() {
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
    <BrowserRouter>
      <div className="container">
        <nav className="nav">
          <Link to="/">Etusivu</Link>
          <Link to="/shopping">Shopping</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/items">REST</Link>
          <Link to="/items/add">Add</Link>
        </nav>

        <Header />

        <Routes>
          {/* 🏠 ETUSIVU */}
          <Route
            path="/"
            element={
              <div>
                <h1>React-harjoitukset</h1>

                <ShoppingList />
                <PostList />

                <Tervehdys nimi="Chioma" />
                <OpiskelijaTiedot opiskelija={opiskelija} />
                <Infolista taulukko={tiedot} />
                <Linkkilista lista={linkit} />
                <Kayttajakortti nimi="Ville" lista={tiedot} />

                <Counter />
                <KayttajaHaku />
                <KayttajaJaPostaukset />
              </div>
            }
          />

          {/* MUUT NÄKYMÄT */}
          <Route path="/shopping" element={<ShoppingList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/counter" element={<Counter />} />

          {/* REST CRUD */}
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/items/add" element={<AddItem />} />
          <Route path="/items/edit/:id" element={<EditItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
