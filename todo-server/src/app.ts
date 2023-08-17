import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import morgan from "morgan";

const PORT = 3000;
const app = express();

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let taskList = [
  { id: uuidv4(), title: "설거지하기", isDone: false },
  { id: uuidv4(), title: "빨래하기", isDone: false },
  { id: uuidv4(), title: "책상 청소하기", isDone: false },
  { id: uuidv4(), title: "신발장 정리하기", isDone: false },
  { id: uuidv4(), title: "빨래 개기", isDone: false },
];
const auth = "passed";

app.post("/auth", (req, res) => {
  if (req.body.auth === auth) {
    res.send("yes");
  } else {
    res.send("no");
  }
});

app.get("/api/tasks", (req, res) => {
  console.log(taskList);
  res.json({ taskList });
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: "title을 입력해주세요." });
    return;
  }
  const newTask = { id: uuidv4(), title, isDone: false };
  taskList = [...taskList, newTask];
  console.log(taskList);
  res.json({ message: "할 일이 추가되었습니다." });
});

app.patch("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  taskList = taskList.map((task) => {
    if (task.id === id) return { ...task, isDone };
    return task;
  });
  res.json({ message: "완료 상태가 업데이트되었습니다." });
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);
  res.json({ message: "삭제가 완료되었습니다." });
});

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
});
