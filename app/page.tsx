"use client";
import { useCallback, useState } from "react";

type Task = {
  id: number;
  title: string;
  status: "ToDo" | "InProgress" | "Done";
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = useCallback(() => {
    if (!newTask) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title: newTask, status: "ToDo" },
    ]);
    setNewTask("");
  }, [newTask]);

  const taskStatus = useCallback(() => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.status === "ToDo") {
          return { ...task, status: "InProgress" };
        } else if (task.status === "InProgress") {
          return { ...task, status: "Done" };
        } else {
          return task;
        }
      })
    );
  }, [ tasks ]);

  return (
    <div>
      <h1>タスク管理アプリ</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>追加</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <select value={task.status} onChange={taskStatus}>
              <option value="ToDo">ToDo</option>
              <option value="InProgress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
