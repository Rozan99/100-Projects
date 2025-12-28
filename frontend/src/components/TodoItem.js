import { completeTodo, deleteTodo } from "../api/todoApi";
import Timer from "./Timer";

export default function TodoItem({ todo, onCompleted, onDeleted }) {
  const handleComplete = async () => {
    const updated = await completeTodo(todo.id);
    onCompleted(updated);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    onDeleted(todo.id);
  };

  const handleTimerComplete = () => {
    alert(`Time's up for "${todo.title}"!`);
  };

  return (
    <div
      style={{
        border: "1px solid #dcdde1",
        padding: "15px",
        marginBottom: "12px",
        borderRadius: "10px",
        backgroundColor: todo.completed ? "#dcdde1" : "#f1f2f6",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px 0",
          color: "#2f3640",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </h3>
      <p style={{ margin: "0 0 5px 0" }}>Duration: {todo.duration} min</p>
      <p style={{ margin: "0 0 10px 0" }}>
        Status: {todo.completed ? "Completed" : "Pending"}
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        {!todo.completed && (
          <button
            onClick={handleComplete}
            style={{
              backgroundColor: "#487eb0",
              color: "#fff",
              borderRadius: "6px",
            }}
          >
            Mark Completed
          </button>
        )}
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "#e84118",
            color: "#fff",
            borderRadius: "6px",
          }}
        >
          Delete
        </button>
      </div>
      {!todo.completed && (
        <Timer duration={todo.duration} onComplete={handleTimerComplete} />
      )}
    </div>
  );
}
