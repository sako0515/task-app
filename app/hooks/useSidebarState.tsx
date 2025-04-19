"use client";
import { useCallback, useState } from "react";
import { FileText, Home, List } from "lucide-react";
import { Item } from "../types";

export const useSidebarState = () => {
  const [items, setItems] = useState<Item[]>([
    { title: "ホーム", icon: <Home />, path: "/" },
    { title: "タスクリスト", icon: <List />, path: "/tasks" },
  ]);
  const handleAdd = useCallback(() => {
    const newIndex = items.length - 2 + 1;
    setItems((prev) => [
      ...prev,
      {
        title: `リスト${newIndex}`,
        icon: <FileText />,
        path: `/tasks/${newIndex}`,
      },
    ]);
  }, [items]);

  return { items, handleAdd };
};
