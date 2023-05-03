import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], fallback: ["system-ui", "arial"] });

export const metadata = {
  title: "Yago Andrade's blog",
  description: "Made with NextJS",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-96 dark:bg-zinc-900 bg-white" style={inter.style}>
        <Header />
        <main className="px-8 dark:text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
