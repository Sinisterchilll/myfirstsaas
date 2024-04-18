
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import Navbar from "./components/Navbar";
import Providers from "@/app/components/Providers";
import { Toaster } from "@/app/components/ui/toaster";

import 'react-loading-skeleton/dist/skeleton.css'
import 'simplebar-react/dist/simplebar.min.css'
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

export const viewport: Viewport = {
  themeColor: '#FFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <Providers>
      <body className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
            <Toaster />
            <Navbar />
            {children}
          </body>
          </Providers>
    </html>
  );
}
