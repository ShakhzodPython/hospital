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
            <p className={styles.footer_column_list_link}>{t("title_footer_address_key")}<span>{t("title_footer_address_value")}</span></p>
            <p className={styles.footer_column_list_link}>{t("title_footer_number_key")}<span>+ 998 99 999 99 99</span></p>
            <p className={styles.footer_column_list_link}>
              {t("title_footer_email_key")}<span>5shifoxonasi@gmail.com</span>
            </p>
            <p className={styles.footer_column_list_link}>
              {t("title_footer_work_schedule_key")}
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
          <h3 className={styles.footer_column_title}>{t("title_about_us")}</h3>
          <ul className={styles.footer_column_list}>
            <li className={styles.footer_column_list_link}>{t("title_footer_career")}</li>
            <li className={styles.footer_column_list_link}>{t("title_footer_doctors")}</li>
            <li className={styles.footer_column_list_link}>{t("title_footer_blog")}</li>
            <li className={styles.footer_column_list_link}>
              {t("title_footer_question_answer")}
            </li>
            <li className={styles.footer_column_list_link}>{t("title_footer_contacts")}</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.footer_column}>
          <h3 className={styles.footer_column_title}>{t("title_footer_services")}</h3>
          <ul className={styles.footer_column_list}>
            <li className={styles.footer_column_list_link}>{t("title_footer_ambulance")}</li>
            <li className={styles.footer_column_list_link}>{t("title_footer_hospital")}</li>
            <li className={styles.footer_column_list_link}>{t("title_footer_laboratory")}</li>
            <li className={styles.footer_column_list_link}>
              {t("title_main_name")}
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.footer_column}>
          <h3 className={styles.footer_column_title}>{t("title_footer_help")}</h3>
          <ul className={styles.footer_column_list}>
            <li className={styles.footer_column_list_link}>
              {t("title_footer_privacy_policy")}
            </li>
            <li className={styles.footer_column_list_link}>
              {t("title_footer_user_agreement")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
