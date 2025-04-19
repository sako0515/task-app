"use client";
import { useSidebarState } from "../hooks/useSidebarState";

export default function Tasks() {
  const { items, handleAdd } = useSidebarState();

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">タスクリスト</h1>
      <ul>
          
      </ul>
    </div>
  );
}
