import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "./api";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((res) => setItem(res.data));
  }, [id]);

  if (!item) return <p>Ladataan...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}
