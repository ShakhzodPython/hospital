import styles from "./Specialist.module.scss";
import girl from "../../../assets/images/girl.png";
import woman from "../../../assets/images/woman.png";
import man from "../../../assets/images/man.png";
import { SpecialistType } from "../services/Specialist/Specialist.types";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router";
import {useTranslation} from "react-i18next";

export function SpecialistPage() {
  const breadcrumbs = useBreadcrumbs();
  const { t } = useTranslation()

  const specialists: Array<SpecialistType> = [
    {
      name: t('doctor_1'),
      description:
        t('doctor_1_title'),
      job: t('doctor_1_job'),
      image: man,
      slug: "therapist",
    },
    {
      name: t('doctor_2'),
      description:
        t('doctor_2_title'),
      job: t('doctor_2_job'),
      image: girl,
      slug: "pediatrician",
    },

    {
      name: t('doctor_3'),
      description:
        t('doctor_3_title'),
      job: t('doctor_3_job'),
      image: woman,
      slug: "gynecologist",
    },

    {
      name: t('doctor_4'),
      description:
        t('doctor_4_title'),
      job: t('doctor_4_job'),
      image: woman,
      slug: "gynecologist",
    },
  ];

  return (
    <div className={styles.specialist_page}>
      <div className={styles.specialist_page_container}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.specialist_page_content}>
          <h1 className={styles.specialist_page_content_title}>
            {t("title_doctors_specialists")}
          </h1>
          <div className={styles.specialist_page_content_layout}>
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className={styles.specialist_page_content_layout_specialist}
              >
                <Link to={`/doctors-and-specialists/${specialist.slug}`}>
                  <div
                    className={
                      styles.specialist_page_content_layout_specialist_heading
                    }
                  >
                    <h1
                      className={
                        styles.specialist_page_content_layout_specialist_heading_title
                      }
                    >
                      {specialist.name}
                    </h1>
                    <p
                      className={
                        styles.specialist_page_content_layout_specialist_heading_description
                      }
                    >
                      {specialist.description}
                    </p>
                  </div>
                  <div
                    className={
                      styles.specialist_page_content_layout_specialist_image
                    }
                  >
                    <h3
                      className={
                        styles.specialist_page_content_layout_specialist_image_job
                      }
                    >
                      {specialist.job}
                    </h3>
                    <img src={specialist.image} alt={specialist.name} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
