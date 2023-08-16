import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

const taskList = [
  { id: uuidv4(), title: "설거지하기", isDone: false },
  { id: uuidv4(), title: "빨래하기", isDone: false },
  { id: uuidv4(), title: "책상 청소하기", isDone: false },
  { id: uuidv4(), title: "신발장 정리하기", isDone: false },
  { id: uuidv4(), title: "빨래 개기", isDone: false },
];

export default function App() {
  return (
    <section className="section-center">
      <Form />
      <TaskList tasks={taskList} />
    </section>
  );
}
