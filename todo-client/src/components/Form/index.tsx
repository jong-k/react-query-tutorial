import { FormEvent, useState } from "react";
import s from "./index.module.scss";
import { useAddTask } from "../../hooks/mutations/useAddTask";

export default function Form() {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask, error, isLoading } = useAddTask();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    addTask(taskTitle);
    if (error) console.log(error);
    setTaskTitle("");
  };

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <h4>오늘의 할 일</h4>
      <div className={s.control}>
        <input
          type="text"
          className={s.input}
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          할 일 추가
        </button>
      </div>
    </form>
  );
}
