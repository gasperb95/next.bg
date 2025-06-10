import styles from './blogPost.module.css';
export default function BlogPost({ post }) {
    return (
      <div>
        <img className={styles.featured} src={post.featuredImage} alt={post.featuredImageAltText} />
        <h1>{post.htmlTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.postBody }} />
      </div>
    );
}