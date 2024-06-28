import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  
  // Adds new items to the todo list
  function handleSubmit(e) {
    e.preventDefault(); // prevents the page from refreshing when submitting

    if (newItem === "") return

    onSubmit(newItem);

    // clears out the previous input
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}