import Link from 'next/link';
import Layout from '../../components/layout';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
//import Header from '../../components/header/header';

export default function Page({ posts }) {
  return (
    <div>
      <Head>
            <title>Brandon's Blog</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <header> 
      </header>
      <br />
      <Layout>
        <div>
          <h1>My Blog</h1>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link className={styles.card2}
                key={post.id}
                href={`/blog/${post.id}/${post.slug.replace(/^\/?blog\/?/, '')}`}
                passHref
              >
                <div>
                  <div className={styles.imgbox}>
                  <img
                    className={styles.feature}
                    src={post.featuredImage}
                    alt={post.featuredImageAltText}
                  />
                  </div>
                  <h2 className={styles.postTitle}>{post.htmlTitle}</h2>
                  <p>
                    {new Date(post.created).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p>{post.authorName}</p>
                </div>
              </Link>
            ))}
          </div>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </div>
      </Layout>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

    
export async function getStaticProps() {
  const res = await fetch('https://api.hubspot.com/cms/v3/blogs/posts?sort=-createdAt', {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_KEY}`
    }
  });
  const data = await res.json();
  const posts = Array.isArray(data.results) ? data.results : [];

  return {
    props: { posts },
    revalidate: 60, // optional: ISR
  };
}
