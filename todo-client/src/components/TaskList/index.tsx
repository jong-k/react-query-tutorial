import Task from "../Task";

interface TaskListProps {
  tasks: TaskType[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="taskList">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}
