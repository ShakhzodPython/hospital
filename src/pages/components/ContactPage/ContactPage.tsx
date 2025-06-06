import styles from './ContactPage.module.scss';
import { Link, useLocation } from 'react-router';
import { Minus } from 'lucide-react';

import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs';
import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs';
import { ScheduleType } from './ContactPage.types';
import { useState } from 'react';

export function ContactPage() {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs();

  const schedules: Array<ScheduleType> = [
    {
      day: 'Du',
      information: 'Dushanba — Juma: 08:00 – 17:00',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: 'Se',
      information: 'Dushanba — Juma: 08:00 – 17:00',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: 'Ch',
      information: 'Dushanba — Juma: 08:00 – 17:00',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: 'Pa',
      information: 'Dushanba — Juma: 08:00 – 17:00',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: 'Ju',
      information: 'Dushanba — Juma: 08:00 – 17:00',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: 'Sh',
      information: 'Dushanba — Juma: 08:00 – 17:00',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },

    {
      day: 'Ya',
      information: 'Dam olish',
      email: '5shifoxonasi@gmail.com',
      phone_number: '+998 62 000 00 00',
      address: 'Manzil',
    },
  ];

  const [activeDay, setActiveDay] = useState<string>('Du');

  return (
    <div className={styles.contact_page}>
      <div className={styles.contact_page_container}>
        <Breadcrumbs items={breadcrumbs} />
        <h1 className={styles.contact_page_title}>Biz blan bog‘lanish</h1>
        <div className={styles.contact_page_content}>
          <div className={styles.contact_page_content_layout}>
            <div className={styles.contact_page_content_layout_buttons}>
              <Link to='/contact'>
                <button
                  className={`${
                    styles.contact_page_content_layout_buttons_button
                  } ${
                    location.pathname === '/contact'
                      ? styles.contact_page_content_layout_buttons_button_active
                      : null
                  }`}
                >
                  <div
                    className={`${styles.contact_page_content_layout_buttons_button_number}`}
                  >
                    <span>1</span>
                  </div>
                  <Minus
                    className={`${
                      styles.contact_page_content_layout_buttons_button_icon
                    } ${
                      location.pathname === '/contact'
                        ? styles.contact_page_content_layout_buttons_button_icon_active
                        : null
                    }`}
                    size={30}
                  />
                </button>
              </Link>

              <Link to='/appointment'>
                <button
                  className={`${
                    styles.contact_page_content_layout_buttons_button
                  } ${
                    location.pathname === '/appointment'
                      ? styles.contact_page_content_buttons_button_active
                      : null
                  }`}
                >
                  <div
                    className={`${styles.contact_page_content_layout_buttons_button_number}`}
                  >
                    <span>2</span>
                  </div>
                  <Minus
                    className={`${
                      styles.contact_page_content_layout_buttons_button_icon
                    } ${
                      location.pathname === '/appointment'
                        ? styles.contact_page_content_layout_buttons_button_icon_active
                        : null
                    }`}
                    size={30}
                  />
                </button>
              </Link>
            </div>
            <div className={styles.contact_page_content_layout_heading}>
              <p>
                Bizning registratura yoki ma’lumot markazimiz orqali quyidagi
                raqamlar bilan bog‘lanishingiz mumkin:
              </p>
              <p>Asosiy raqam: +998 62 000 00 00</p>
              <p>Qo‘shimcha raqam (registratura): +998 62 111 11 11</p>
              <p>
                E-mail: <span>5shifoxonasi@gmail.com</span>
              </p>
            </div>
          </div>
          <div className={styles.contact_page_content_schedule}>
            <ul className={styles.contact_page_content_schedule_day_list}>
              {schedules.map((schedule, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(schedule.day)}
                  className={`${
                    styles.contact_page_content_schedule_day_list_button
                  } ${
                    activeDay === schedule.day
                      ? styles.contact_page_content_schedule_day_list_button_active
                      : null
                  }`}
                >
                  <span>{schedule.day}</span>
                </button>
              ))}
            </ul>
            <div className={styles.contact_page_content_schedule_information}>
              {schedules
                .filter((schedule) => schedule.day === activeDay)
                .map((schedule, index) => (
                  <div
                    key={index}
                    className={
                      styles.contact_page_content_schedule_information_item
                    }
                  >
                    <div>
                      <h1
                        className={
                          styles.contact_page_content_schedule_information_item_title
                        }
                      >
                        Ish vaqti
                      </h1>
                      <p
                        className={
                          styles.contact_page_content_schedule_information_item_description
                        }
                      >
                        {' '}
                        {schedule.information}
                      </p>
                    </div>
                    <div
                      className={
                        styles.contact_page_content_schedule_information_item_list
                      }
                    >
                      <p
                        className={
                          styles.contact_page_content_schedule_information_item_list_email
                        }
                      >
                        E-mail: <span>{schedule.email}</span>
                      </p>
                      <p
                        className={
                          styles.contact_page_content_schedule_information_item_list_phone_number
                        }
                      >
                        Telefon raqam: {schedule.phone_number}
                      </p>
                      <p
                        className={
                          styles.contact_page_content_schedule_information_item_list_address
                        }
                      >
                        Manzil: {schedule.address}
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
