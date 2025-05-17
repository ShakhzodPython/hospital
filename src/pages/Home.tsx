import { ArrowRight, MoveUpRight } from 'lucide-react';

import styles from './Home.module.scss';
import backgroundImage from '../assets/images/backgroundImage.webp';
import { Link } from 'react-router';
import { Paid } from './components/services/Paid/Paid';
import { Specialist } from './components/services/Specialist/Specialist';
import { Patient } from './components/services/Patient/Patient';
import { AboutUs } from './components/services/AboutUs/AboutUs';

export function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_container}>
          <div className={styles.home_content}>
            <div className={styles.home_content_layout}>
              <div className={styles.home_content_layout_background}>
                <div className={styles.home_content_layout_heading}>
                  <h1 className={styles.home_content_layout_heading_title}>
                    5-Sonli shifoxonamiz sahifasiga
                    <br />
                    <span>Xush kelibsiz!</span>
                  </h1>
                  <p className={styles.home_content_layout_heading_text}>
                    Biz har bir <span>bemor</span> salomatligiga{' '}
                    <span>mas’uliyat</span> bilan
                    <br />
                    yondashamiz.
                  </p>
                  <div className={styles.home_content_layout_heading_buttons}>
                    <Link to='/appointment'>
                      <button
                        className={
                          styles.home_content_layout_heading_buttons_reception
                        }
                      >
                        <span>Qabulga yozdirilish</span>
                        <MoveUpRight size={20} color='#2d2d2d' />
                      </button>
                    </Link>
                    <Link to='/contact'>
                      <button
                        className={
                          styles.home_content_layout_heading_buttons_link
                        }
                      >
                        <span>Bog‘lanish</span>
                        <ArrowRight size={20} color='#06c0b4' />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.home_content_layout_bottom}>
                <Link to='#'>
                  <p className={styles.home_content_layout_bottom_title}>
                    Qanday qilib qabulga yozilish mumkin?
                  </p>
                </Link>
                <ArrowRight color='#2d2d2d' />
                <Link to='#'>
                  <p className={styles.home_content_layout_bottom_text}>
                    Onlayn forma orqali yoki telefon orqali yozilishingiz
                    mumkin.
                  </p>
                </Link>
              </div>
            </div>
            <div className={styles.home_content_layout_image}>
              <img src={backgroundImage} alt='background-image' />
            </div>
          </div>
        </div>
      </div>
      <Paid />
      <Specialist />
      <Patient />
      <AboutUs />
    </>
  );
}
