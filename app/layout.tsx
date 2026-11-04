import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prosper Dike — Full Stack Developer",
  description:
    "Portfolio of Prosper Dike, a full stack developer building web and mobile products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className={`${body.variable} ${display.variable} ${code.variable}`}>
        {children}
      </body>
    </html>
  );
}
