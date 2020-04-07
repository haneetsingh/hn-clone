import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import classNames from 'classnames';

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="./y18.gif" alt="logo" />
      </div>
      <ul className={styles.links_list}>
        <li className={styles.links_list_item}>
          <Link href="/">
            <a className={router && router.pathname == "/" && styles.links_list_link_active}>top</a>
          </Link>
        </li>
        {' | '}
        <li className={styles.links_list_item}>
          <Link href="/newest">
            <a className={router && router.pathname == "/newest" && styles.links_list_link_active}>new</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
