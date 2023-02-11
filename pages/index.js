import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Public_Sans } from '@next/font/google'

const roboto = Public_Sans({
  weight: '600',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Pranav Bhoopala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.centered}>
        <p className={roboto.className}>hi, i'm Pranav!</p>
      </div>
    </>
  )
}
