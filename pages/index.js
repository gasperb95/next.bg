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
          Just a guy exploring the world and learning <code>code</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about-me" className={styles.card}>
            <h3>Who am I? &rarr;</h3>
            <p>Well I don't even know, but I'll do my best here.</p>
          </Link>

          <Link href="/travel" className={styles.card}>
            <h3>Travels &rarr;</h3>
            <p>Learn about my adventures as a clueless traveler!</p>
          </Link>

          <Link
            href="/Coding"
            className={styles.card}
          >
            <h3>Coding &rarr;</h3>
            <p>Here I'll document my attempts at learning to code</p>
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
