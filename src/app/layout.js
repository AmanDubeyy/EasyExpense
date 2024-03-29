"use client"
import { Inter } from 'next/font/google'
import './globals.css';
import { SessionProvider } from "next-auth/react";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './baveuse/baveuse.otf',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${myFont.className}`}>
      <body><SessionProvider>{children}</SessionProvider></body>
    </html>
  )
}