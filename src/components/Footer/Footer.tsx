import { Link } from 'react-router';

import styles from './Footer.module.scss';
import instagram from '../../assets/icons/instagram.svg';
import telegram from '../../assets/icons/telegram.svg';
import {useTranslation} from "react-i18next";

export function Footer() {
  const { t } = useTranslation()
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        {/* Column 1 */}
        <div className={styles.footer_column}>
          <Link to='/' className={styles.footer_column_logo}>
            {t("title_main_name")}
          </Link>
          <ul className={styles.footer_column_list}>
            <p className={styles.footer_column_list_link}>Manzil:</p>
            <p className={styles.footer_column_list_link}>Telefon:</p>
            <p className={styles.footer_column_list_link}>
              E-mail: <span>5shifoxonasi@gmail.com</span>
            </p>
            <p className={styles.footer_column_list_link}>
              Ish vaqti: Dushanba–Juma,{' '}
              <span className={styles.highlight}>08:00 - 17:00</span>
            </p>
          </ul>
          <div className={styles.footer_column_social_icons}>
            <Link to='#'>
              <img src={instagram} alt='instagram' />
            </Link>
            <Link to='#'>
              <img src={telegram} alt='telegram' />
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.footer_column} >
          <h3 className={styles.footer_column_title}>Biz haqimizda</h3>
          <ul className={styles.footer_column_list}>
            <li className={styles.footer_column_list_link}>Karyera</li>
            <li className={styles.footer_column_list_link}>Shifokorlar</li>
            <li className={styles.footer_column_list_link}>Blog</li>
            <li className={styles.footer_column_list_link}>
              Savollar va javoblar
            </li>
            <li className={styles.footer_column_list_link}>Kontaktlar</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.footer_column}>
          <h3 className={styles.footer_column_title}>Xizmatlar</h3>
          <ul className={styles.footer_column_list}>
            <li className={styles.footer_column_list_link}>Tez yordam</li>
            <li className={styles.footer_column_list_link}>Kasalxona</li>
            <li className={styles.footer_column_list_link}>Laboratoriya</li>
            <li className={styles.footer_column_list_link}>
            5-sonli shifohona
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.footer_column}>
          <h3 className={styles.footer_column_title}>Yordam</h3>
          <ul className={styles.footer_column_list}>
            <li className={styles.footer_column_list_link}>
              Maxfiylik siyosati
            </li>
            <li className={styles.footer_column_list_link}>
              Foydalanuvchi shartnomasi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
