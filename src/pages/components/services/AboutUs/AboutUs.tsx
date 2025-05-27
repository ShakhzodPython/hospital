import styles from './AboutUs.module.scss';
import {useTranslation} from "react-i18next";

export function AboutUs() {
    const {t} = useTranslation()
    return (
        <div className={styles.about_us_service}>
            <div className={styles.about_us_service_container}>
                <h1 className={styles.about_us_service_title}>{t("title_about_us")}</h1>
            </div>
        </div>
    );
}
