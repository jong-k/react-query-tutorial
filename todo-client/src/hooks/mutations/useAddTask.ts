import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTask } from "../../api/task";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addTask,
    data,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (taskTitle: string) => postTask(taskTitle),
    onSuccess: () => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { addTask, error, isLoading };
};
