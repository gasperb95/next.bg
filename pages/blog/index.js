import Link from 'next/link';
import Layout from '../../components/layout';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
//import Header from '../../components/header/header';

export default function Page({ posts }) {
  //console.log(posts);
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
                key={post.blogpost}
                href={`/blog/${post.blogpost}/${post.slug.replace(/^\/?blog\/?/, '')}`}
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
                    {new Date(post.date).toLocaleDateString(undefined, {
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
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const db = client.db('Blog');
  const collection = db.collection('pages');
  const posts = await collection.find({ type : "post"}).sort({ date: -1 }).toArray();
  client.close();
  

return {
    props: {
      posts: posts ? JSON.parse(JSON.stringify(posts)) : [],
    },
    revalidate: 60,
  };
}