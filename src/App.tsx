import "./styles.css"
import { todoState } from "./state"
import { TodoItem } from "./TodoItem"

export function App() {
  const todos = todoState.useStore((s) => s.todos)

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="button_list">
        <button onClick={todoState.createTodo}>New</button>
        <button onClick={todoState.clearCompleted}>Clear Completed</button>
        <button disabled={!todoState.canUndo} onClick={todoState.undo}>
          Undo
        </button>
        <button disabled={!todoState.canRedo} onClick={todoState.redo}>
          Redo
        </button>
      </div>
      <div className="todo_list">
        {Object.values(todos)
          .sort((a, b) => a.dateCreated - b.dateCreated)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  )
}
