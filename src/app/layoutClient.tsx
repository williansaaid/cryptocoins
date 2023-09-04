"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from '@/utils/queryClient';

const inter = Inter({ subsets: ['latin'] })

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <body
                    className={`bg-white w-full min-h-screen flex flex-col items-center ${inter.className}`}
                >
                    {children}
                </body>
            </html>
        </QueryClientProvider>
    )
}