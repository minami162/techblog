import Link from 'next/link';
import styles from './styles.module.css'; // CSSモジュールをインポート

export default function Header() {
  return (
    <>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <button className={styles.button}>Top</button>
        </Link>
        <Link href="/news">
          <button className={styles.button}>News</button>
        </Link>
        <Link href="/category">
          <button className={styles.button}>Category</button>
        </Link>
      </nav>
    </header>
    <hr></hr>
    </>
  );
}
