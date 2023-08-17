import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchIsDone } from "../../api/task";

export const useUpdateIsDone = () => {
  const queryClient = useQueryClient();
  const { mutate: updateIsDone, data } = useMutation({
    mutationFn: ({ id, isDone }: { id: string; isDone: boolean }) =>
      patchIsDone(id, isDone),
    onSuccess: () => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { updateIsDone };
};
