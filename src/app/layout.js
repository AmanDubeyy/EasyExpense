"use client"
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css';
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body><SessionProvider>{children}</SessionProvider></body>
    </html>
  )
}