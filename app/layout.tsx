import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="m-0 min-h-screen">
        <header className="m-[10px] h-[64px] bg-slate-50 rounded-lg">
          <h1 className="pt-[20px] font-bold">タスク管理アプリ</h1>
        </header>
        <div className="flex min-h-screen">
          <aside className="m-[10px] w-[150px] bg-slate-100 rounded-lg">
            <nav className="flex pt-[20px]">
              
            </nav>
          </aside>
          <main className="flex-1 m-[10px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
