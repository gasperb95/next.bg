import Link from 'next/link';
import Layout from '../../components/layout';
import Footer from '../../components/footer/footer';

export default function Random() {
  return (
    <div> 
    <Layout>
      <h1>Welcome to the random bin</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
    <footer>
    <Footer>
    </Footer>
    </footer>
    </div>
  );
}