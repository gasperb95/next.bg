import Link from 'next/link';
import Layout from '../../components/layout';
import Footer from '../../components/footer/footer';

export default function Posts() {
  return (
    <> 
    <Layout>
      <h1>My Travels</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
    <Footer></Footer>
    </>
  );
}