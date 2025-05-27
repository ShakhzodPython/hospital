import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';

import styles from './Paid.module.scss';
import love from '../../../../assets/icons/love.svg';
import scalpel from '../../../../assets/icons/scalpel.svg';
import pulse from '../../../../assets/icons/pulse.svg';
import brain from '../../../../assets/icons/brain.svg';
import female from '../../../../assets/icons/female.svg';
import male from '../../../../assets/icons/male.svg';
import virus from '../../../../assets/icons/virus.svg';
import flask from '../../../../assets/icons/flask.svg';
import network from '../../../../assets/icons/network.svg';

import { Link } from 'react-router';
import { ServiceType } from './Paid.types';

import {useTranslation} from "react-i18next";

export function Paid() {
  const { t } = useTranslation()
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const services: Array<ServiceType> = [
    { name: t('title_therapy'), image: love, slug: 'therapy' },
    { name: t('title_surgery'), image: scalpel, slug: 'surgery' },
    { name: t('title_cardiology'), image: pulse, slug: 'cardiology' },
    { name: t('title_neurology'), image: brain, slug: 'neurology' },
    { name: t('title_gynecology'), image: female, slug: 'gynecology' },
    { name: t('title_andrology'), image: male, slug: 'andrology' },
    { name: t('title_allergology'), image: virus, slug: 'allergology' },
    {
      name: t('title_laboratory-diagnoses'),
      image: flask,
      slug: 'laboratory-diagnoses',
    },
    { name: t('title_endocrinology'), image: network, slug: 'endocrinology' },
  ];

  return (
    <div className={styles.paid_service}>
      <div className={styles.paid_service_container}>
        <div className={styles.paid_service_layout}>
          <h1 className={styles.paid_service_layout_title}>{t("title_paid_services")}</h1>
          <Link to='/paid-services'>
            <button className={styles.paid_service_layout_button}>
              <span>{t("button_all")}</span>
              <MoveUpRight size={20} color='#06c0b4' />
            </button>
          </Link>
        </div>

        {/* Custom navigation buttons  */}
        <div className={styles.paid_service_layout_custom}>
          <div className={styles.paid_service_layout_custom_buttons}>
            <button
              ref={prevRef}
              className={styles.paid_service_layout_custom_buttons_prev_button}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className={styles.paid_service_layout_custom_buttons_next_button}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
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
          className={styles.paid_service_layout_swiper}
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className={styles.paid_service_layout_swiper_slide}
            >
              <Link to={`/paid-services/${service.slug}`}>
                <h3 className={styles.paid_service_layout_swiper_slide_title}>
                  {service.name}
                </h3>
                <div className={styles.paid_service_layout_swiper_slide_image}>
                  <img src={service.image} alt={service.name} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
