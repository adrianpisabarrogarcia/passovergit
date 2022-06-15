import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Header from './global/header'






export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pass Over Git</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className={styles.main}>
        
        
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
