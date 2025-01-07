import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Noto_Sans_JP, Merriweather } from "next/font/google";

export const notoJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

export const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js plus coffee",
  description: "blend techBeans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-notojp: ${notoJP.variable};
            --font-merriweather: ${merriweather.variable};
          }
        `}</style>
      </head>
      <body
        className={`${notoJP.className} bg-primary-background text-primary`}
      >
        <div className="flex flex-col justify-between w-full h-full min-h-screen m-auto">
          <Header />
          <main className="flex-auto w-full mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
