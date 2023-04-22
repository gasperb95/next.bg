import Link from 'next/link';
import Layout from '../../components/layout';

export default function Random() {
  return (
    <Layout>
      <h1>Welcome to the random bin</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}