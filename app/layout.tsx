
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header>タスク管理アプリ</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
