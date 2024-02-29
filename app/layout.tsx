import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import localFont from "next/font/local";

const graphik = localFont({
  src: [
    {
      path: "../public/assets/fonts/graphik/GraphikThin.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikExtralight.otf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikMedium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikSemibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/assets/fonts/graphik/GraphikBlack.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-graphik",
});

const soehne = localFont({
  src: [
    {
      path: "../public/assets/fonts/soehne/soehne-var.woff2",
    },
  ],
  variable: "--font-soehne",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        <title>{`Yago's Blog`}</title>
      </head>
      <body
        className={`xl:px-96 bg-gradient-to-b dark:from-[#0f0f0f] dark:to-[#111010] from-stone-100 via-neutral-100 to-emerald-100 min-h-screen font-extralight ${soehne.className}`}
      >
        <Header />
        <main className="px-4 py-4 dark:text-white min-h-[calc(100vh-76px-52px)] lg:min-h-[calc(100vh-92px-84px)]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
