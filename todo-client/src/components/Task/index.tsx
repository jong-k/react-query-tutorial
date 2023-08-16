interface TaskProps {
  task: TaskType;
}

export default function Task({ task }: TaskProps) {
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => console.log("할 일 수정하기")}
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
        onClick={() => console.log("할 일 제거하기")}
      >
        제거
      </button>
    </div>
  );
}
