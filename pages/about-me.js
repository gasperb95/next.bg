import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import Footer from '../components/footer/footer';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Me({ post }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Brandon Gasper</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>{post?.htmlTitle}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.postBody }} />
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </main>
      </Layout>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

import { MongoClient } from 'mongodb';

export async function getStaticProps() {
  const uri = process.env.MONGODB_URI;
  const client = await MongoClient.connect(uri);
  const db = client.db('Blog');
  const collection = db.collection('pages');
  const data = await collection.find({ /* your query here */ }).toArray();
  client.close();

  // If you expect a single post, use data[0]
  return {
    props: {
      post: data[0] ? JSON.parse(JSON.stringify(data[0])) : null,
    },
    revalidate: 60,
  };
}