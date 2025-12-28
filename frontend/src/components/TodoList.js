import { useEffect, useState } from "react";
import { getTodos } from "../api/todoApi";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#2f3640" }}>Todo List</h2>
      <TodoForm onTodoCreated={(newTodo) => setTodos([...todos, newTodo])} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleted={(updated) =>
            setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
          }
          onDeleted={(id) => setTodos(todos.filter((t) => t.id !== id))}
        />
      ))}
    </div>
  );
}
