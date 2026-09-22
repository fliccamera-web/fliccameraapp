import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flic — QR Disposable Camera for Weddings & Events",
  description: "Capture everyone's perspective. A disposable camera for your event, in everyone's pocket.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
