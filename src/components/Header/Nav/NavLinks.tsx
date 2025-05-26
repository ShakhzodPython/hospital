import i18n from '../../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowRight } from 'lucide-react';

import styles from '../Header.module.scss';
import { NavLinksProps, LinksType } from './Nav.types';

export function NavLinks({ activeLink, setActiveLink }: NavLinksProps) {
  const { i18n: i18next } = useTranslation();
  const location = useLocation();

  const currentLang = i18next.language || 'ru';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

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
      <li>
        <select
          value={currentLang}
          onChange={(e) => changeLanguage(e.target.value)}
          className={styles.language_selector}
        >
          <option value='uz'>Uz</option>
          <option value='ru'>Ru</option>
          <option value='en'>En</option>
        </select>
      </li>
      <button className={styles.header_nav_list_button}>
        <span>Bog‘lanish</span>
        <ArrowRight />
      </button>
    </ul>
  );
}
