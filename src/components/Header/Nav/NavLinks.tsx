import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router';

import styles from '../Header.module.scss';
import { NavLinksProps, LinksType } from './Nav.types';
import { ArrowRight } from 'lucide-react';

export function NavLinks({ activeLink, setActiveLink }: NavLinksProps) {
  const location = useLocation();

  const links: Array<LinksType> = useMemo(
    () => [
      { name: 'Bosh sahifa', url: '/' },
      { name: 'Pullik xizmatlar', url: '/paid-services' },
      { name: 'Shifokorlar va mutaxassislar', url: '/doctors-and-specialists' },
      { name: 'Bemorlar uchun', url: '/for-patients' },
      { name: 'Biz haqimizda', url: '/about-us' },
    ],
    []
  );

  useEffect(() => {
    const active = links.find((link) => link.url == location.pathname);
    if (active) {
      setActiveLink(active.name);
      localStorage.setItem('familyactiveLink', active.name);
    } else if (location.pathname === '/') {
      setActiveLink(null);
      localStorage.removeItem('activeLink');
    }
  }, [links, location.pathname, setActiveLink]);

  return (
    <ul className={styles.header_nav_list}>
      {links.map((link, id) => (
        <li
          key={id}
          className={`${styles.header_nav_list_link} ${
            activeLink === link.name ? styles.header_nav_list_link_active : null
          }`}
        >
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
      <button className={styles.header_nav_list_button}>
        <span>Bog‘lanish</span>
        <ArrowRight />
      </button>
    </ul>
  );
}
