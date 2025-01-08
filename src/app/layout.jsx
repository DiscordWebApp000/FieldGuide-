import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Enerji Təhsili",
  description: "Elektrik sistemləri üçün təhsil və qiymətləndirmə platforması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 