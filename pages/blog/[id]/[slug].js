import styles from '../../../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/layout';
import Footer from '../../../components/footer/footer';
import Comments from '../../../components/comments/comments';
import BlogPost from '../../../components/blogPost/blogPost';

//           padding: 5rem 

export default function Page({ post, comments }) {
  return (
    <div>
    <Layout>
    <div>
        <Head>
        <title>{post.htmlTitle}</title>
        <meta name="description" content={post.metaDescription || post.htmlTitle} />
        <meta property="og:title" content={post.htmlTitle} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.metaDescription || post.htmlTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.htmlTitle} />
        <meta name="twitter:image" content={post.featuredImage} />
        </Head>
        <BlogPost post={post} />
        <Comments postId={post.id} />
        <h2>
        <Link href="/blog">Back to Blog</Link>
      </h2>
    </div>
    </Layout>
    <footer>
    <Footer>
    </Footer>
    </footer>
    </div>
  );
}
export async function getStaticPaths() {
  // Fetch all blog posts to get their IDs
  const res = await fetch('https://api.hubspot.com/cms/v3/blogs/posts', {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_KEY}`
    }
  });
  const data = await res.json();

  // Adjust this if your API returns an array in data
  const posts = Array.isArray(data.results) ? data.results : [];
  const paths = posts.map(post => ({
    params: { id: post.id.toString(), slug: post.slug.replace(/^\/?blog\/?/, '')} 
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  // Fetch the blog post
  const postRes = await fetch(`https://api.hubspot.com/cms/v3/blogs/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_KEY}`
    }
  });
  const post = await postRes.json();

  // Fetch the comments for this post
 // const commentsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/comments/${id}`);
  //const commentsData = await commentsRes.json();
  //const comments = commentsData.data || [];

  return { props: { post } };
}