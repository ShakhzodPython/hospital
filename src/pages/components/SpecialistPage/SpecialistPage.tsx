import styles from "./Specialist.module.scss";
import girl from "../../../assets/images/girl.png";
import woman from "../../../assets/images/woman.png";
import man from "../../../assets/images/man.png";
import { SpecialistType } from "../services/Specialist/Specialist.types";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router";

export function SpecialistPage() {
  const breadcrumbs = useBreadcrumbs();
  const specialists: Array<SpecialistType> = [
    {
      name: "Davron Hamraev Bekmirza o‘g‘li",
      description:
        "Tajribali terapevt. Ichki kasalliklar va umumiy tibbiy yordam bo‘yicha mutaxassis.",
      job: "Terapevt",
      image: man,
      slug: "therapist",
    },
    {
      name: "Bakhdirova Asad Rustam qizi",
      description:
        "Bolalar salomatligi bo‘yicha yetakchi pediatr. 0–16 yoshgacha bolalar bilan ishlaydi.",
      job: "Pediatr",
      image: girl,
      slug: "pediatrician",
    },

    {
      name: "Mahliyo Tursunova Azamat qizi",
      description:
        "Ayollar salomatligi va homiladorlikni kuzatish bo‘yicha mutaxassis.",
      job: "Ginekolog",
      image: woman,
      slug: "gynecologist",
    },

    {
      name: "Mahliyo Tursunova Azamat qizi",
      description:
        "Ayollar salomatligi va homiladorlikni kuzatish bo‘yicha mutaxassis.",
      job: "Ginekolog",
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
            Shifokorlar va mutaxassislar
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
