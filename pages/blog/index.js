import Link from 'next/link';
import Layout from '../../components/layout';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';

export default function Page({ posts }) {
  return (
    <Layout>
      <h1>Travel Blog Posts</h1>
      <div className='card'>
        {posts.map((post) => (
          <div className={styles.card2} key={post.id}>
            <Link href={`/blog/${post.id}/${post.htmlTitle}`}>
            <img className={styles.feature} src={post.featuredImage} alt={post.featuredImageAltText} />
            <h2>{post.htmlTitle}</h2>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.hubspot.com/cms/v3/blogs/posts', {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_KEY}`
    }
  });
  const data = await res.json();
  // Adjust this if the posts are nested in the response
  const posts = data.results || data || [];
  return { props: { posts } };
}