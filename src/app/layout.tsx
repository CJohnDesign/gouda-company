'use client';

import React, { useState, useEffect } from "react";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { app, analytics } from '@/lib/firebase';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    // You can initialize analytics or perform other Firebase-related tasks here
  }, []);

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