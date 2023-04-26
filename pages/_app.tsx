import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Nav from '@/components/nav'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevMe</title>
      </Head>
      <main className={inter.className}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  )
}
