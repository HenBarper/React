import { useState } from "react"
import "./styles.css"

export default function App() {
  // Create our states and the functions used to change them
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  // Adds new items to the todo list
  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    // clears out the previous input
    setNewItem("")
  }

  // toggles the checkbox based on matching ids
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }

        // returns the todo item unaltered if not a match
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    // Fragmenting so we can return multiple elements with <></>
    <>
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
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          // Each element in a returned array needs to have a key
          return <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} 
            onChange={e => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
        </li>
        })}
      </ul>
    </>
  )
}