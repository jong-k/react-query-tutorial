import { redirect, useLoaderData } from "react-router-dom";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

export default function App() {
  const auth = useLoaderData();
  if (auth !== "passed") redirect("/login");

  return (
    <section className="section-center">
      <Form />
      <TaskList />
    </section>
  );
}
