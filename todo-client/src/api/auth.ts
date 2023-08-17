import { customAxios } from ".";

export const getAuth = async (key: string) => {
  const { data } = await customAxios.post("/auth", { auth: key });
  return data;
};
