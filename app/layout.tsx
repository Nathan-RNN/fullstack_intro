import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/creations/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "@/components/creations/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow"> {children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
