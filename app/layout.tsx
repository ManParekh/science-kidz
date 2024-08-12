import { Footer } from "@/components/footer";
import { InnerNavbar, OuterNavbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { MobileNav } from "@/components/mobile-sidebar";
import NextTopLoader from "nextjs-toploader";

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
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NextTopLoader showSpinner={false} />
        <OuterNavbar />
        <MobileNav />
        <main
          className="flex w-full flex-col items-center justify-center bg-[#fcf9f6]"
          style={{
            backgroundImage: `url("/bg-svg.svg")`,
            backgroundSize: "1920px 1080px",
          }}
        >
          <InnerNavbar />
          {children}
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
