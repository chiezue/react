import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem, updateItem } from "./api";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getItem(id).then((res) => {
      setName(res.data.name);
      setDescription(res.data.description);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, { name, description });
    navigate("/items");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Muokkaa</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Tallenna</button>
    </form>
  );
}
