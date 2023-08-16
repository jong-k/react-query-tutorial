import { customAxios } from ".";

// 전체 할 일 조회
export const fetchTasks = async () => {
  const res = await customAxios.get("/tasks");
  return res;
};

// 할 일 하나 조회
export const fetchTaskById = async (id: string) => {
  const res = await customAxios.get(`/tasks/${id}`);
  return res;
};
