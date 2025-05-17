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
      <h2>My name is Brandon Gasper</h2>
      <div className={styles.grid}> 
      <Image 
      priortiy
      src="/images/profile2.jpg"
      className={utilStyles.borderCircle}
      width={450}
      height={450}
      alt="Brandon's Profile Picture"
      /> 
      </div>
      <div className={styles.grid}><p>I'm a Produt Manager with 8+ years of experience. I enjoy managing complicated web projects and dabling with web coding in my spare time.
      </p>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </main>
    </Layout>
<footer>
<Footer>
</Footer>
</footer>
    </>
  );
}