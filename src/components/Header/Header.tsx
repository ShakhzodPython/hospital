import { useState } from 'react';

import styles from './Header.module.scss';
import { NavLinks } from './Nav/NavLinks';
import { Link } from 'react-router';

export function Header() {
  const [activeLink, setActiveLink] = useState<string | null>(
    localStorage.getItem('activeLink') || ''
  );

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav className={styles.header_nav}>
          <div className={styles.header_nav_logo}>
            <Link to='/'>5-sonli shifohona</Link>
          </div>
          <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
        </nav>
      </div>
    </header>
  );
}
