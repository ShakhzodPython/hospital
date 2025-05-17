import { Link } from 'react-router';

import styles from './PaidPage.module.scss';
import love from '../../../assets/icons/love.svg';
import scalpel from '../../../assets/icons/scalpel.svg';
import pulse from '../../../assets/icons/pulse.svg';
import brain from '../../../assets/icons/brain.svg';
import female from '../../../assets/icons/female.svg';
import male from '../../../assets/icons/male.svg';
import virus from '../../../assets/icons/virus.svg';
import flask from '../../../assets/icons/flask.svg';
import network from '../../../assets/icons/network.svg';
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs';
import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs';
import { ServiceType } from '../services/Paid/Paid.types';

export function PaidPage() {
  const breadcrumbs = useBreadcrumbs();

  const services: Array<ServiceType> = [
    { name: 'Terapıya', image: love, slug: 'therapy' },
    { name: 'Xirurgiya', image: scalpel, slug: 'surgery' },
    { name: 'Kardiologiya', image: pulse, slug: 'cardiology' },
    { name: 'Nevrologiya', image: brain, slug: 'neurology' },
    { name: 'Ginekologiya', image: female, slug: 'gynecology' },
    { name: 'andrologiya', image: male, slug: 'andrologiya' },
    { name: 'Allergologiya', image: virus, slug: 'allergology' },
    {
      name: 'Laboratoriya tashxislari',
      image: flask,
      slug: 'laboratory-diagnoses',
    },
    { name: 'Endokrinologiya', image: network, slug: 'endocrinology' },
  ];

  return (
    <div className={styles.paid_page}>
      <div className={styles.paid_page_container}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.paid_page_content}>
          <div className={styles.paid_page_content_services}>
            {services.map((service, index) => (
              <div
                key={index}
                className={styles.paid_page_content_services_card}
              >
                <Link to={`/paid-services/${service.slug}`}>
                  <h3 className={styles.paid_page_content_services_card_title}>
                    {service.name}
                  </h3>
                  <div className={styles.paid_page_content_services_card_image}>
                    <img src={service.image} alt={service.name} />
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
