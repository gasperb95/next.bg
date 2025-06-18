import styles from './blogPost.module.css';
export default function BlogPost({ post }) {
    return (
      <div>
        <img className={styles.featured} src={post.data[0].featuredImage} alt={post.data[0].featuredImageAltText} />
        <h1>{post.data[0].htmlTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.data[0].postBody }} />
      </div>
    );
}