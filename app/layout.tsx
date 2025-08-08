import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { PageTransition } from "@/components/layout/page-transition";
import { SmartVideoPreloader } from "@/components/utils/video-preloader";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden min-h-screen w-full",
          inter.className
        )}
      >
        <SmartVideoPreloader />
        <StarsCanvas />
        <div className="relative w-full min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full max-w-[1920px] mx-auto">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
