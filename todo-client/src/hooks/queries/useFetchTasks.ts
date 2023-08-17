import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../api/task";
import { AxiosError } from "axios";

export const useFetchTasks = () => {
  const { data, isLoading, error } = useQuery<TaskType[], AxiosError>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  return { data, isLoading, error };
};
