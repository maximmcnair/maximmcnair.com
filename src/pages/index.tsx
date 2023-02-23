import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
// import Work from '@/components/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxim McNair</title>
        <meta name="description" content="Product engineer building creative tools for the web." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/Epilogue.woff2" as="font" type="font/woff2" crossOrigin="use-credentials" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section id="about">
          <Intro />
        </section>
      </main>
    </>
  );
  // <Drawing />
  // <section id="work">
  //   <Work />
  // </section>
}

