// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next"; // ✅ Import the correct type
import React from "react";

// ✅ Explicitly define the metadata type
export const metadata: Metadata = {
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
