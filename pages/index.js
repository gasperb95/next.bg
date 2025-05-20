import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brandon Gasper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello I'm <Link href="/">Brandon!</Link>
        </h1>

        <p className={styles.description}>
          Experienced Product Manager with a passion for web development.
        </p>

        <div className={styles.grid}>
          <Link href="/about-me" className={styles.card}>
            <h3>Who am I? &rarr;</h3>
            <p>Find out here</p>
          </Link>

          <Link href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Learn about my adventures!</p>
          </Link>

          <Link
            href="/Resume"
            className={styles.card}
          >
            <h3>Resume </h3>
            <p>Check out my virtual Resume</p>
          </Link>

          <Link
            href="/Random"
            className={styles.card}
          >
            <h3>Random &rarr;</h3>
            <p>
              A random bucket for everything else. 
            </p>
          </Link>
        </div>
      </main>
<footer>
<Footer>
</Footer>
</footer>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
