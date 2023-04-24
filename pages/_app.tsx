import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Nav from '@/components/nav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.className}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  )
}
