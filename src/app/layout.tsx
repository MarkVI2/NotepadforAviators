import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-background-dark p-4 bg-gray-200">
          <h1>Notepad for Aviators</h1>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
