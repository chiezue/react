import { useEffect, useState } from "react";
import { getAllItems, deleteItem } from "./api";
import { Link } from "react-router-dom";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const res = await getAllItems();

      // 🛡️ varmistus ettei kaadu
      if (res && res.data) {
        setItems(res.data);
      } else {
        setItems([]);
      }
    } catch (err) {
      console.error(err);
      setError("Tietojen haku epäonnistui");
      setItems([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Kaikki tiedot</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1">
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Kuvaus</th>
            <th>Toiminnot</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="3">Ei tietoja</td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={`/items/${item.id}`}>Näytä</Link>{" "}
                  <Link to={`/items/edit/${item.id}`}>Muokkaa</Link>{" "}
                  <button onClick={() => handleDelete(item.id)}>Poista</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
