// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "CODY Music App",
  description: "Simple music player with visualizer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}
