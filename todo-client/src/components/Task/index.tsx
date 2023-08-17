import { useUpdateIsDone } from "../../hooks/mutations/useUpdateIsDone";
import { useDeleteTask } from "../../hooks/mutations/useDeleteTask";
import s from "./index.module.scss";

interface TaskProps {
  task: TaskType;
}

export default function Task({ task }: TaskProps) {
  const { updateIsDone } = useUpdateIsDone();
  const { deleteTask } = useDeleteTask();

  return (
    <div className={s.taskContainer}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => updateIsDone({ id: task.id, isDone: !task.isDone })}
      />
      <p
        style={
          task.isDone
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        {task.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}
