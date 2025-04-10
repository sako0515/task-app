"use client";
import { useTasks } from "./hooks/useTasks";
import { Task } from "./types";

export default function Home() {
  const { tasks, newTask, setNewTask, addTask, updateStatus, deleteTask } =
    useTasks();

  return (
    <div className="flex flex-col bg-slate-200 rounded-lg p-4">
      <h1 className="mb-4 font-bold text-lg">Todoリスト</h1>
      <div className="flex mb-4">
        <input
          className="pl-2 border rounded-md flex-1"
          placeholder="入力してください"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 rounded-md"
          onClick={addTask}
        >
          +
        </button>
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-slate-300 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex-1">{task.title}</div>
            <select
              value={task.status}
              onChange={(e) =>
                updateStatus(task.id, e.target.value as Task["status"])
              }
              className="border rounded-md p-1"
            >
              <option value="ToDo">ToDo</option>
              <option value="InProgress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-2 text-red-500 hover:underline"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
