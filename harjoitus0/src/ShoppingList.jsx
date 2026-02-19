import { useState } from "react";
import Form from "./Form";
import ItemList from "./ItemList";

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (newItemText) => {
    const newItem = {
      id: crypto.randomUUID(),
      text: newItemText,
    };

    setItems([...items, newItem]);
  };

  const removeItem = (idToRemove) => {
    setItems(items.filter((item) => item.id !== idToRemove));
  };

  return (
    <div>
      <Form onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
}

export default ShoppingList;
