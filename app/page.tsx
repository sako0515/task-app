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

  const updateStatus = useCallback((id: number, newStatus: Task["status"]) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === id ? { ...prevTask, status: newStatus } : prevTask
      )
    );
  }, []);

  return (
    <div className="flex flex-col bg-slate-200 rounded-lg">
      <h1 className="m-[16px] font-bold">Todoリスト</h1>
      <div className="flex m-[16px]">
        <input className="pl-[6px]" placeholder="入力してください" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button className="ml-[12px]" onClick={addTask}>+</button>
      </div>
      <ul className="flex w-[100%] ">
          {tasks.map((task) => (
            <li className="bg-slate-300 rounded-lg m-[16px] h-[160px]" key={task.id}>
              <select
                value={task.status}
                onChange={(e) =>
                  updateStatus(task.id, e.target.value as Task["status"])
                }
              >
                <option value="ToDo">ToDo</option>
                <option value="InProgress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <div>{task.title}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}
