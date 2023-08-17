import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../../api/task";
import { AxiosError } from "axios";

export const useFetchTasks = () => {
  const { data, isLoading, error } = useQuery<TaskType[], AxiosError>(
    ["tasks"],
    fetchTasks,
  );
  return { data, isLoading, error };
};
