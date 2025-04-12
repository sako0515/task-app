import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar";
import "./globals.css";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defalultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="ja">
      <body className="min-h-screen">
        <div className="flex">
          <SidebarProvider defaultOpen={defalultOpen}>
            <AppSidebar />
            <main className="flex-1 p-4">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
