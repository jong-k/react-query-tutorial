import { customAxios } from ".";

// 전체 할 일 조회
export const getTasks = async (): Promise<TaskType[]> => {
  const res = await customAxios.get("/tasks");
  return res.data.taskList;
};

// 할 일 하나 조회
export const getTaskById = async (id: string): Promise<TaskType> => {
  const res = await customAxios.get(`/tasks/${id}`);
  return res.data;
};

// 할 일 추가
export const postTask = async (taskTitle: string) => {
  const res = await customAxios.post(`/tasks`, { title: taskTitle });
  return res.data.message;
};

// 할 일 완료 여부 변경
export const patchIsDone = async (id: string, isDone: boolean) => {
  const res = await customAxios.patch(`/tasks/${id}`, { isDone });
  return res.data.message;
};
