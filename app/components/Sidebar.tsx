"use client";
import { Calendar, Home, ListTodo, Code, MoreHorizontal } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useState } from "react";

type ListItem = { id: number; title: string; type: "todo" | "review" };

const staticItems = [
  { title: "ホーム", url: "/", icon: Home },
  { title: "カレンダー", url: "/calendar", icon: Calendar },
  { title: "Todoリスト", url: "/todos", icon: ListTodo },
  { title: "コードレビュー", url: "/reviews", icon: Code },
];

export const AppSidebar = () => {
  const [lists, setLists] = useState<ListItem[]>([
    { id: 1, title: "リスト1", type: "todo" },
    { id: 2, title: "レビュー1", type: "review" },
  ]);
  const [isPrivateHovered, setIsPrivateHovered] = useState(false);

  const addList = (type: "todo" | "review") => {
    const newId = Date.now();
    setLists((prev) => [
      ...prev,
      {
        id: newId,
        title: `${type === "todo" ? "リスト" : "レビュー"}${newId}`,
        type,
      },
    ]);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <SidebarGroupLabel>プロジェクト</SidebarGroupLabel>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {staticItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>
                        <span>編集</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>削除</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarHeader>
            <div
              className="relative flex items-center p-2 rounded-md hover:bg-gray-200 transition"
              onMouseEnter={() => setIsPrivateHovered(true)}
              onMouseLeave={() => setIsPrivateHovered(false)}
            >
              <SidebarGroupLabel>プライベート</SidebarGroupLabel>
              {isPrivateHovered && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="absolute right-2 p-1 text-blue-500 hover:text-blue-700">
                      <MoreHorizontal size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem onClick={() => addList("todo")}>
                      <span>新しいTodoリスト</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => addList("review")}>
                      <span>新しいコードレビュー</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {lists.map((list) => (
                <SidebarMenuItem key={list.id}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={
                        list.type === "todo"
                          ? `/todos/${list.id}`
                          : `/reviews/${list.id}`
                      }
                    >
                      <ListTodo size={16} />
                      <span>{list.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>
                        <span>編集</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>削除</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
