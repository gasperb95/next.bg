import Link from 'next/link';
import styles from './footer.module.css';
export default function Footer() {
    return <div className={styles.Foot}>
            <ul>
                <li className={styles.inline}><Link href="/">Home</Link></li>
                <li className={styles.inline}><a href="https://www.linkedin.com/in/brandongasper/" target="blank">Linkedin</a></li>
                <li className={styles.inline}><a href="https://www.instagram.com/brandon95g/" target="blank">Instagram</a></li>
                <li className={styles.inline}><a href="https://github.com/gasperb95" target="blank">GitHub</a></li>
            </ul>
    </div>;
  }