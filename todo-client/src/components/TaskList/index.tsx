import Task from "../Task";
import { useFetchTasks } from "../../hooks/queries/useFetchTasks";

export default function TaskList() {
  const { data, isLoading, error } = useFetchTasks();

  return (
    <div className="taskList">
      {isLoading && }
      {data.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}
