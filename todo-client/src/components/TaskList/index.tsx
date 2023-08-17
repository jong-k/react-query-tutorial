import Task from "../Task";
import { useFetchTasks } from "../../hooks/queries/useFetchTasks";
import LoadingSpinner from "../LoadingSpinner";
import s from "./index.module.scss";

export default function TaskList() {
  const { data, isLoading, error } = useFetchTasks();
  if (error) console.log(error);

  return (
    <div className={s.taskList}>
      {isLoading && <LoadingSpinner />}
      {error && <h2>{error.message}</h2>}
      {data?.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}
