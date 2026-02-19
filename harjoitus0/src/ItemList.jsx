function ItemList({ items, onRemoveItem }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-item"
          onClick={() => onRemoveItem(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
