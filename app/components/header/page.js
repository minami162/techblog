'use client'; // クライアントコンポーネントとして実行
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 現在のパスを取得
import styles from './styles.module.css';

export default function Header() {
  const pathname = usePathname(); // 現在のパスを取得

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <button
              className={`${styles.button} ${
                pathname === '/' ? styles.active : ''
              }`}
            >
              Top
            </button>
          </Link>
          <Link href="/news">
            <button
              className={`${styles.button} ${
                pathname === '/news' ? styles.active : ''
              }`}
            >
              News
            </button>
          </Link>
          <Link href="/category">
            <button
              className={`${styles.button} ${
                pathname === '/category' ? styles.active : ''
              }`}
            >
              Category
            </button>
          </Link>
        </nav>
      </header>
      <hr className={styles.hr} />
    </>
  );
}
