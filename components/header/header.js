import Link from 'next/link';
import styles from './header.module.css';
export default function Header() {
    return <div className={styles.Foot}>
            <ul>
                <li className={styles.inline}><Link href="/" aria-label='Link back to Home Page'>Home</Link></li>
                <li className={styles.inline}><Link href="/blog" aria-label='Link back to Home Page'>Blog</Link></li>
                <li className={styles.inline}><Link href="/resume" aria-label='Link back to Home Page'>Resume</Link></li>
                <li className={styles.inline}><Link href="/random" aria-label='Link back to Home Page'>Random</Link></li>
            </ul>
    </div>
  }