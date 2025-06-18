import styles from './blogPost.module.css';
import Image from 'next/image';
export default function BlogPost({ post }) {
    return (
      <div>
        <Image loading="eager" width="612" height="491" style={{ width: '100%', height: 'auto' }} className={styles.featured} src={post.data[0].featuredImage} alt={post.data[0].featuredImageAltText} />
        <h1>{post.data[0].htmlTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.data[0].postBody }} />
      </div>
    );
}