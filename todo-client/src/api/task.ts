import { customAxios } from ".";

// 전체 할 일 조회
export const getTasks = async (): Promise<TaskType[]> => {
  const { data } = await customAxios.get("/tasks");
  return data.taskList;
};

// 할 일 하나 조회
export const getTaskById = async (id: string): Promise<TaskType> => {
  const { data } = await customAxios.get(`/tasks/${id}`);
  return data;
};

// 할 일 추가
export const postTask = async (taskTitle: string) => {
  const { data } = await customAxios.post(`/tasks`, { title: taskTitle });
  return data.message;
};

// 할 일 완료 여부 변경
export const patchIsDone = async (id: string, isDone: boolean) => {
  const { data } = await customAxios.patch(`/tasks/${id}`, { isDone });
  return data.message;
};

// 할 일 삭제
export const deleteTaskById = async (id: string) => {
  const { data } = await customAxios.delete(`/tasks/${id}`);
  return data.message;
};
