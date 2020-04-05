import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Header.module.scss'

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="./static/y18.gif" />
      </div>
      <ul className={styles.links}>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a className={styles.active}>top</a>
          </Link>
        </li>
        {' | '}
        <li className={router.pathname == "/newest" ? "active" : ""}>
          <Link href="/newest">
            <a className={styles.active}>new</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
