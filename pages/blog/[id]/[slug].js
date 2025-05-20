import styles from '../../../styles/Home.module.css';

export default function Page({ post }) {
  return (
    <div>
      <div key={post.id}>
        <img className={styles.feature} src={post.featuredImage} alt={post.htmlTitle} />
        <h2>{post.htmlTitle}</h2>
        <body dangerouslySetInnerHTML={{ __html: post.postBody }} />
        {/* Add more post details here if needed */}
      </div>
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