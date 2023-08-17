import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../../api/task";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (taskTitle: string) => addTask(taskTitle),
    onSuccess: () => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { mutate, error, isLoading };
};
