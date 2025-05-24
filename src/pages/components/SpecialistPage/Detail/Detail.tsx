import { useParams } from "react-router";

import styles from "./Detail.module.scss";
import girl from "../../../../assets/images/girl.png";
import woman from "../../../../assets/images/woman.png";
import man from "../../../../assets/images/man.png";
import phone from "../../../../assets/icons/phone.svg";
import { useBreadcrumbs } from "../../../../hooks/useBreadcrumbs";
import { SpecialistType } from "../../services/Specialist/Specialist.types";
import { Breadcrumbs } from "../../../../components/Breadcrumbs/Breadcrumbs";

export function Detail() {
  const { slug } = useParams();

  const breadcrumbs = useBreadcrumbs();

  const specialists: Array<SpecialistType> = [
    {
      name: "Davron Hamraev Bekmirza o‘g‘li",
      description:
        "Tajribali terapevt. Ichki kasalliklar va umumiy tibbiy yordam bo‘yicha mutaxassis.",
      job: "Terapevt",
      image: man,
      phone_number: "+998 62 000 00 00",
      slug: "therapist",
    },
    {
      name: "Bakhdirova Asad Rustam qizi",
      description:
        "Bolalar salomatligi bo‘yicha yetakchi pediatr. 0–16 yoshgacha bolalar bilan ishlaydi.",
      job: "Pediatr",
      image: girl,
      phone_number: "+998 62 000 00 00",
      slug: "pediatrician",
    },

    {
      name: "Mahliyo Tursunova Azamat qizi",
      description:
        "Ayollar salomatligi va homiladorlikni kuzatish bo‘yicha mutaxassis.",
      job: "Ginekolog",
      image: woman,
      phone_number: "+998 62 000 00 00",
      slug: "gynecologist",
    },

    {
      name: "Mahliyo Tursunova Azamat qizi",
      description:
        "Ayollar salomatligi va homiladorlikni kuzatish bo‘yicha mutaxassis.",
      job: "Ginekolog",
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
