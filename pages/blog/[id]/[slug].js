import styles from '../../../styles/Home.module.css';
import Link from 'next/link';
export default function Page({ post }) {
  return (
    <div>
        <img className={styles.featured} src={post.featuredImage} alt={post.htmlTitle} />
        <h1>{post.htmlTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.postBody }} />
        <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
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