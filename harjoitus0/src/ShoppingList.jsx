import { useState } from "react";
import AddItemForm from "./Lomake";

function ShoppingList() {
  const [items, setItems] = useState(["kiivi", "banaani", "kaurajuoma"]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <AddItemForm onAddItem={addItem} />

      {/* 🔵 YKSI SININEN LISTA */}
      <ul className="list">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item"
            onClick={() => removeItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
