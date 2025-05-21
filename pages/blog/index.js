import Link from 'next/link';
import Layout from '../../components/layout';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

export default function Page({ posts }) {
  return (
    <Layout>
    <div>
        <Head>
        <title>Brandon's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My Blog</h1>
      <div className='card'>
        {posts.map((post) => (
          <div className={styles.card2} key={post.id}>
            
            <img className={styles.feature} src={post.featuredImage} alt={post.featuredImageAltText} />
            <h2>{post.htmlTitle}</h2>
            <p>
              {new Date(post.created).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
              })}
            </p>
            <p>{post.authorName}</p>
            <Link href={`/blog/${post.id}/${post.slug.replace(/^\/?blog\/?/, '')}`}>
            <p> View Post</p>
            </Link>
          </div>
        ))}
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    <Footer />
    </div>
    </Layout>
  );
}

    
export async function getServerSideProps() {
  const res = await fetch('https://api.hubspot.com/cms/v3/blogs/posts?sort=-createdAt', {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_KEY}`
    }
  });
  const data = await res.json();
  // Adjust this if the posts are nested in the response
  const posts = data.results || data || [];
  return { props: { posts } };
}