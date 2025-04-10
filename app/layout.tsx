import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-bold">タスク管理アプリ</h1>
        </header>
        <div className="flex ">
          <aside className="w-40 bg-gray-100 min-h-screen p-4 hidden md:block">
            <nav>
              <ul className="space-y-2">
                <li className="hover:bg-gray-300 p-2 rounded">メニュー1</li>
                <li className="hover:bg-gray-300 p-2 rounded">メニュー2</li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}