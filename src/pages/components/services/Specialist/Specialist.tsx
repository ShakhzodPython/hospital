import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import styles from './Specialist.module.scss';
import girl from '../../../../assets/images/girl.png';
import woman from '../../../../assets/images/woman.png';
import man from '../../../../assets/images/man.png';
import { SpecialistType } from './Specialist.types';
import {useTranslation} from "react-i18next";

export function Specialist() {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { t } = useTranslation()

  const specialists: Array<SpecialistType> = [
    {
      name: t('doctor_1'),
      description:
        t('doctor_1_title'),
      job: t('doctor_1_job'),
      image: man,
      slug: t('doctor_1_slug'),
    },
    {
      name: t('doctor_2'),
      description:
        t('doctor_2_title'),
      job: t('doctor_2_job'),
      image: girl,
      slug: t('doctor_2_slug'),
    },

    {
      name: t('doctor_3'),
      description:
        t('doctor_3_title'),
      job: t('doctor_3_job'),
      image: woman,
      slug: t('doctor_3_slug'),
    },

    {
      name: t('doctor_4'),
      description:
        t('doctor_4_title'),
      job: t('doctor_4_job'),
      image: woman,
      slug: t('doctor_4_slug'),
    },
  ];

  return (
    <div className={styles.specialists_service}>
      <div className={styles.specialists_service_container}>
        <div className={styles.specialists_service_layout}>
          <h1 className={styles.specialists_service_layout_title}>
            {t("title_doctors_specialists")}
          </h1>
          <Link to='/doctors-and-specialists'>
            <button className={styles.specialists_service_layout_button}>
              <span>{t("button_all")}</span>
              <MoveUpRight size={20} color='#06c0b4' />
            </button>
          </Link>
        </div>

        {/* Custom navigation buttons  */}
        <div className={styles.specialists_service_layout_custom}>
          <div className={styles.specialists_service_layout_custom_buttons}>
            <button
              ref={prevRef}
              className={
                styles.specialists_service_layout_custom_buttons_prev_button
              }
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className={
                styles.specialists_service_layout_custom_buttons_next_button
              }
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className={styles.specialists_service_layout_swiper}
        >
          {specialists.map((specialist, index) => (
            <SwiperSlide
              onClick={() =>
                navigate(`/doctors-and-specialists/${specialist.slug}`)
              }
              key={index}
              className={styles.specialists_service_layout_swiper_slide}
            >
              <h3
                className={styles.specialists_service_layout_swiper_slide_title}
              >
                {specialist.name}
              </h3>
              <p
                className={
                  styles.specialists_service_layout_swiper_slide_description
                }
              >
                {specialist.description}
              </p>
              <div
                className={styles.specialists_service_layout_swiper_slide_image}
              >
                <h3
                  className={
                    styles.specialists_service_layout_swiper_slide_image_job
                  }
                >
                  {specialist.job}
                </h3>
                <img src={specialist.image} alt={specialist.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
