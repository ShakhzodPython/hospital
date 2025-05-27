import {ArrowRight, MoveUpRight} from 'lucide-react';

import styles from './Home.module.scss';
import backgroundImage from '../assets/images/backgroundImage.webp';
import {Link} from 'react-router';
import {Paid} from './components/services/Paid/Paid';
import {Specialist} from './components/services/Specialist/Specialist';
import {Patient} from './components/services/Patient/Patient';
import {useTranslation} from "react-i18next";

export function Home() {
    const { t } = useTranslation()

    return (
        <>
            <div className={styles.home}>
                <div className={styles.home_container}>
                    <div className={styles.home_content}>
                        <div className={styles.home_content_layout}>
                            <div className={styles.home_content_layout_background}>
                                <div className={styles.home_content_layout_heading}>
                                    <h1 className={styles.home_content_layout_heading_title}>
                                        <span>{t("main_page_header_1")}</span>
                                        <br/>
                                        {t("main_page_header_2")}
                                    </h1>
                                    <p className={styles.home_content_layout_heading_text}>
                                        {t("main_page_header_info_1")} <span>{t("main_page_header_info_2")}</span> {t("main_page_header_info_3")}{' '}
                                        <span>{t("main_page_header_info_4")}</span> {t("main_page_header_info_5")}
                                    </p>
                                    <div className={styles.home_content_layout_heading_buttons}>
                                        <Link to='/appointment'>
                                            <button
                                                className={
                                                    styles.home_content_layout_heading_buttons_reception
                                                }
                                            >
                                                <span>{t("button_reception")}</span>
                                                <MoveUpRight size={20} color='#2d2d2d'/>
                                            </button>
                                        </Link>
                                        <Link to='/contact'>
                                            <button
                                                className={
                                                    styles.home_content_layout_heading_buttons_link
                                                }
                                            >
                                                <span>{t("button_contact")}</span>
                                                <ArrowRight size={20} color='#06c0b4'/>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.home_content_layout_bottom}>
                                <Link to='#'>
                                    <p className={styles.home_content_layout_bottom_title}>
                                        {t("button_question_reception")}
                                    </p>
                                </Link>
                                <ArrowRight color='#2d2d2d'/>
                                <Link to='#'>
                                    <p className={styles.home_content_layout_bottom_text}>
                                        {t("button_answer_reception")}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.home_content_layout_image}>
                            <img src={backgroundImage} alt='background-image'/>
                        </div>
                    </div>
                </div>
            </div>
            <Paid/>
            <Specialist/>
            <Patient/>
        </>
    );
}
