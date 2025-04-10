import "./globals.css";

export function Sidebar() {
  return (
    <nav className="text-xs font-bold w-64 bg-gray-100 min-h-screen p-4 hidden md:block">
      <p className="hover:bg-gray-300 p-2 rounded">プライベート</p>
      <ul className="space-y-2">
        <li className="hover:bg-gray-300 p-2 rounded">メニュー1</li>
        <li className="hover:bg-gray-300 p-2 rounded">メニュー2</li>
      </ul>
    </nav>
  );
}
