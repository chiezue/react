import { useState } from "react";
import { addItem } from "./api";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem({ name, description });
    navigate("/items");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lisää uusi</h2>

      <input
        placeholder="Nimi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Kuvaus"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Tallenna</button>
    </form>
  );
}
