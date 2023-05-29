import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: `Yago Andrade's Blog`,
  description: "Yago Andrade's Blog for sharing thoughts and insights about tech. Made with NextJS.",
  openGraph: {
    title: `Yago Andrade's Blog`,
    description: "Yago Andrade's Blog for sharing thoughts and insights about tech. Made with NextJS.",
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </head>
      <body className="xl:px-96 dark:bg-gray-900 bg-white font-inter min-h-screen">
        <Header />
        <main className="px-4 lg:px-8 dark:text-white min-h-[calc(100vh-76px-52px)] lg:min-h-[calc(100vh-92px-84px)]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
