import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../../api/task";

export const useFetchTasks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
  return { data, isLoading, error };
};
