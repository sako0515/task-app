import { useCallback, useState } from "react";
import { Task } from "../types";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = useCallback(() => {
    if (!newTask) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTask, status: "ToDo" },
    ]);
    setNewTask("");
  }, [newTask]);

  const updateStatus = useCallback((id: number, status: Task["status"]) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      const index = newTasks.findIndex((t) => t.id === id);
      if (index !== -1) newTasks.splice(index, 1);
      return newTasks;
    });
  }, []);

  return { tasks, newTask, setNewTask, addTask, updateStatus, deleteTask };
};
