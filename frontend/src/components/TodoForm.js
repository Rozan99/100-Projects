import { useState } from "react";
import { createTodo } from "../api/todoApi";

export default function TodoForm({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !duration) return;

    const newTodo = await createTodo({ title, duration: parseInt(duration) });
    onTodoCreated(newTodo);
    setTitle("");
    setDuration("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px", display: "flex", gap: "10px" }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
        required
        style={{
          flex: 2,
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (min)"
        required
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#4cd137",
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        Add Todo
      </button>
    </form>
  );
}
