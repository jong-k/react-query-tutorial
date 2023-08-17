import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskById } from "../../api/task";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, data } = useMutation({
    mutationFn: (id: string) => deleteTaskById(id),
    onSuccess: () => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { deleteTask };
};
