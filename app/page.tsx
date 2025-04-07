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

  return (
    <div>
      <h1>タスク管理アプリ</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>追加</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <select
              value={task.status}
              onChange={(e) =>
                setTasks(
                  tasks.map((t) =>
                    t.id === task.id
                      ? { ...t, status: e.target.value as Task["status"] }
                      : t
                  )
                )
              }
            >
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
