import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Footer from '../components/footer/footer';

export default function Me() {
  return (
    <>
    <Layout>
    <Head>
      <title className={styles.title}>Brandon Gasper</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Hey There!</h1>
      <Image 
      priortiy
      src="/images/profile.jpg"
      className={utilStyles.borderCircle}
      height={400}
      width={300}
      alt="Brandon's Profile Picture"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </main>
    </Layout>
    <Footer>
    </Footer>
    </>
  );
}