import { useState } from "react";

export default function Form() {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <h4>오늘의 할 일</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit" className="btn">
          할 일 추가
        </button>
      </div>
    </form>
  );
}
