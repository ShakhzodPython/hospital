import { useParams } from "react-router";

import styles from "./Detail.module.scss";
import girl from "../../../../assets/images/girl.png";
import woman from "../../../../assets/images/woman.png";
import man from "../../../../assets/images/man.png";
import phone from "../../../../assets/icons/phone.svg";
import { useBreadcrumbs } from "../../../../hooks/useBreadcrumbs";
import { SpecialistType } from "../../services/Specialist/Specialist.types";
import { Breadcrumbs } from "../../../../components/Breadcrumbs/Breadcrumbs";
import {useTranslation} from "react-i18next";

export function Detail() {
  const { slug } = useParams();

  const breadcrumbs = useBreadcrumbs();

  const { t } = useTranslation()

  const specialists: Array<SpecialistType> = [
    {
      name: t('doctor_1'),
      description:
        t('doctor_1_title'),
      job: t('doctor_1_job'),
      image: man,
      phone_number: "+998 62 000 00 00",
      slug: "therapist",
    },
    {
      name: t('doctor_2'),
      description:
        t('doctor_2_title'),
      job: t('doctor_2_job'),
      image: girl,
      phone_number: "+998 62 000 00 00",
      slug: "pediatrician",
    },

    {
      name: t('doctor_3'),
      description:
        t('doctor_3_title'),
      job: t('doctor_3_job'),
      image: woman,
      phone_number: "+998 62 000 00 00",
      slug: "gynecologist",
    },

    {
      name: t('doctor_4'),
      description:
        t('doctor_4_title'),
      job: t('doctor_4_job'),
      image: woman,
      phone_number: "+998 62 000 00 00",
      slug: "gynecologist",
    },
  ];

  

  const specialist = specialists.find((specialist) => specialist.slug === slug);

  return (
    <div className={styles.detail_page}>
      <div className={styles.detail_page_container}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.detail_page_content}>
          <div className={styles.detail_page_content_image}>
            <img src={specialist?.image} alt={specialist?.name} />
          </div>
          <div className={styles.detail_page_content_heading}>
            <div>
              <h1 className={styles.detail_page_content_heading_title}>
                {specialist?.name}
              </h1>
              <p className={styles.detail_page_content_heading_description}>
                {specialist?.description}
              </p>
              <h3 className={styles.detail_page_content_heading_job}>
                {specialist?.job}
              </h3>
            </div>

            <div>
              <h3 className={styles.detail_page_content_heading_description}>
                Shifoko’r bilan bog‘lanish
              </h3>
              <button>
                <img src={phone} alt="phone-icon" />
                <span>{specialist?.phone_number}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
