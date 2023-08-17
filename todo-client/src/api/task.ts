import { customAxios } from ".";

// 전체 할 일 조회
export const fetchTasks = async (): Promise<TaskType[]> => {
  const res = await customAxios.get("/tasks");
  return res.data.taskList;
};

// 할 일 하나 조회
export const fetchTaskById = async (id: string): Promise<TaskType> => {
  const res = await customAxios.get(`/tasks/${id}`);
  return res.data;
};

// 할 일 추가
export const addTask = async (taskTitle: string) => {
  const res = await customAxios.post(`/tasks`, { title: taskTitle });
  return res.data.message;
};
