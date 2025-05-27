import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { Minus } from 'lucide-react';

import styles from './Detail.module.scss';
import love from '../../../../assets/full_icons/love.svg';
import scalpel from '../../../../assets/icons/scalpel.svg';
import pulse from '../../../../assets/full_icons/pulse.svg';
import brain from '../../../../assets/full_icons/brain.svg';
import female from '../../../../assets/full_icons/female.svg';
import male from '../../../../assets/full_icons/full_male.svg';
import virus from '../../../../assets/full_icons/virus.svg';
import flask from '../../../../assets/full_icons/flask.svg';
import network from '../../../../assets/full_icons/network.svg';
import { ServiceType } from '../../services/Paid/Paid.types';
import { useBreadcrumbs } from '../../../../hooks/useBreadcrumbs';
import { Breadcrumbs } from '../../../../components/Breadcrumbs/Breadcrumbs';
import { ScheduleType } from '../../ContactPage/ContactPage.types';
import {useTranslation} from "react-i18next";

export function Detail() {
  const { slug } = useParams();
  const { t } = useTranslation()

  const breadcrumbs = useBreadcrumbs();

  const services: Array<ServiceType> = [
    {
      name: t('title_therapy'),
      image: love,
      slug: 'therapy',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_surgery'),
      image: scalpel,
      slug: 'surgery',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_cardiology'),
      image: pulse,
      slug: 'cardiology',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_neurology'),
      image: brain,
      slug: 'neurology',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_gynecology'),
      image: female,
      slug: 'gynecology',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_andrology'),
      image: male,
      slug: 'andrologiya',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_allergology'),
      image: virus,
      slug: 'allergology',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur fugiat labore nemo, beatae molestias perspiciatis. Alias assumenda doloremque laborum!',
    },
    {
      name: t('title_laboratory-diagnoses'),
      image: flask,
      slug: 'laboratory-diagnoses',
    },
    { name: t('title_endocrinology'), image: network, slug: 'endocrinology' },
  ];

  const schedules: Array<ScheduleType> = [
    {
      day: t("title_monday_short"),
      information: `${t("title_footer_work_schedule_key")}08:00 - 17:00`,
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: t("title_tuesday_short"),
      information: `${t("title_footer_work_schedule_key")}08:00 - 17:00`,
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: t("title_wednesday_short"),
      information: `${t("title_footer_work_schedule_key")}08:00 - 17:00`,
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: t("title_thursday_short"),
      information: `${t("title_footer_work_schedule_key")}08:00 - 17:00`,
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: t("title_friday_short"),
      information: `${t("title_footer_work_schedule_key")}08:00 - 17:00`,
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: t("title_saturday_short"),
      information: `${t("title_footer_work_schedule_key")}08:00 - 17:00`,
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: t("title_sunday_short"),
      information: t("title_rest_day"),
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },
  ];

  const [activeDay, setActiveDay] = useState<string>(t("title_monday_short"));

  const service = services.find((service) => service.slug === slug);
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className={styles.detail_page}>
      <div className={styles.detail_page_container}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.detail_page_layout}>
          <div className={styles.detail_page_layout_content}>
            <h1 className={styles.detail_page_layout_content_title}>
              {service.name}
            </h1>
            <div className={styles.detail_page_layout_content_image}>
              <img src={service.image} alt={service.name} />
            </div>
            <ul className={styles.detail_page_layout_content_list}>
              {services.map((service, index) => (
                <Link key={index} to={`/paid-services/${service.slug}`}>
                  <li className={styles.detail_page_layout_content_list_link}>
                    <button
                      className={`${
                        styles.detail_page_layout_content_list_link_button
                      }
                      ${
                        service.slug === slug
                          ? styles.detail_page_layout_content_list_link_button_active
                          : null
                      }`}
                    >
                      <span>{index + 1}</span>
                    </button>
                    <Minus
                      className={`${
                        styles.detail_page_layout_content_list_link_icon
                      }
                    ${
                      service.slug === slug
                        ? styles.detail_page_layout_content_list_link_icon_active
                        : null
                    }`}
                      size={30}
                    />
                  </li>
                </Link>
              ))}
            </ul>
            <p className={styles.detail_page_layout_content_description}>
              {service.description}
            </p>
          </div>
          <div className={styles.detail_page_layout_content_schedule}>
            <ul className={styles.detail_page_layout_content_schedule_day_list}>
              {schedules.map((schedule, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(schedule.day)}
                  className={`${
                    styles.detail_page_layout_content_schedule_day_list_button
                  } ${
                    activeDay === schedule.day
                      ? styles.detail_page_layout_content_schedule_day_list_button_active
                      : null
                  }`}
                >
                  <span>{schedule.day}</span>
                </button>
              ))}
            </ul>
            <div
              className={styles.detail_page_layout_content_schedule_information}
            >
              {schedules
                .filter((schedule) => schedule.day === activeDay)
                .map((schedule, index) => (
                  <div
                    key={index}
                    className={
                      styles.detail_page_layout_content_schedule_information_item
                    }
                  >
                    <div>
                      <h1
                        className={
                          styles.detail_page_layout_content_schedule_information_item_title
                        }
                      >
                        Ish vaqti
                      </h1>
                      <p
                        className={
                          styles.detail_page_layout_content_schedule_information_item_description
                        }
                      >
                        {' '}
                        {schedule.information}
                      </p>
                    </div>
                    <div
                      className={
                        styles.detail_page_layout_content_schedule_information_item_list
                      }
                    >
                      <p
                        className={
                          styles.detail_page_layout_content_schedule_information_item_list_email
                        }
                      >
                        {t("title_footer_email_key")}<span>{schedule.email}</span>
                      </p>
                      <p
                        className={
                          styles.detail_page_layout_content_schedule_information_item_list_phone_number
                        }
                      >
                        {t("title_footer_number_key")}{schedule.phone_number}
                      </p>
                      <p
                        className={
                          styles.detail_page_layout_content_schedule_information_item_list_address
                        }
                      >
                        {t("title_footer_address_key")}{schedule.address}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
