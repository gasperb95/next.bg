import styles from '../../../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/layout';

//           padding: 5rem 

export default function Page({ post }) {
  return (
    <Layout>
    <div>
        <Head>
        <title>{post.htmlTitle}</title>
        </Head>
        <img className={styles.featured} src={post.featuredImage} alt={post.featuredImageAltText} />
        <h1>{post.htmlTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.postBody }} />
        <h2>
        <Link href="/blog">Back to Blog</Link>
      </h2>
    </div>
    </Layout>
  );
}


export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api.hubspot.com/cms/v3/blogs/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_KEY}`
    }
  });
  const post = await res.json();
  return { props: { post } };
}