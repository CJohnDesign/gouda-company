'use client';

import React, { useState } from "react";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
          <div className="flex-1">
            <Header onOpenDrawer={openDrawer} />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}