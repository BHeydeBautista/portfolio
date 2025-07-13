import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bautista Heyde | Portfolio",
  description: "Desarrollador Fullstack especializado en Next.js y NestJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 py-10 space-y-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
