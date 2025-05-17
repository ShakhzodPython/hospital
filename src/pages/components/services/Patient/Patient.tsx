import { ChevronDown } from 'lucide-react';

import styles from './Patient.module.scss';
import { PatientType } from './Patient.type';
import { useState } from 'react';

export function Patient() {
  const patientsLeftSide: Array<PatientType> = [
    {
      name: 'Qabulga yozilish tartibi',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Bo‘limlar ro‘yxati va xizmatlar',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Narxlar ro‘yxati',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Kasalliklar haqida ma’lumotlar',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Shifoxona ichki qoidalari',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
  ];
  const patientsRightSide: Array<PatientType> = [
    {
      name: 'Xarita va yo‘l ko‘rsatmalar',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Aloqa markazi / Yordam xizmati',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Huquq va majburiyatlar',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Reabilitatsiya bo‘limi',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
    {
      name: 'Foydali yuklab olishlar',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, neque.',
    },
  ];

  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setOpenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setOpenRightIndex(openRightIndex === index ? null : index);
  };

  return (
    <div className={styles.patient_service}>
      <div className={styles.patient_service_container}>
        <div className={styles.patient_service_content}>
          <h3 className={styles.patient_service_content_title}>
            Bemorlar uchun
          </h3>
          <div className={styles.patient_service_content_layout}>
            <div className={styles.patient_service_content_layout_dropdown}>
              {patientsLeftSide.map((item, index) => (
                <div
                  key={index}
                  className={
                    styles.patient_service_content_layout_dropdown_item
                  }
                >
                  <div
                    className={
                      styles.patient_service_content_layout_dropdown_item_head
                    }
                  >
                    <h3
                      className={
                        styles.patient_service_content_layout_dropdown_item_head_title
                      }
                    >
                      {item.name}
                    </h3>
                    <button
                      onClick={() => toggleLeft(index)}
                      className={
                        styles.patient_service_content_layout_dropdown_item_head_button
                      }
                    >
                      <ChevronDown
                        color='#06c0b4'
                        style={{
                          transform:
                            openLeftIndex === index
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                          transition: 'transform 0.3s',
                        }}
                      />
                    </button>
                  </div>
                  {openLeftIndex === index && (
                    <p
                      className={
                        styles.patient_service_content_layout_dropdown_item_head_description
                      }
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.patient_service_content_layout_dropdown}>
              {patientsRightSide.map((item, index) => (
                <div
                  key={index}
                  className={
                    styles.patient_service_content_layout_dropdown_item
                  }
                >
                  <div
                    className={
                      styles.patient_service_content_layout_dropdown_item_head
                    }
                  >
                    <h3
                      className={
                        styles.patient_service_content_layout_dropdown_item_head_title
                      }
                    >
                      {item.name}
                    </h3>
                    <button
                      onClick={() => toggleRight(index)}
                      className={
                        styles.patient_service_content_layout_dropdown_item_head_button
                      }
                    >
                      <ChevronDown
                        color='#06c0b4'
                        style={{
                          transform:
                            openRightIndex === index
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                          transition: 'transform 0.3s',
                        }}
                      />
                    </button>
                  </div>
                  {openRightIndex === index && (
                    <p
                      className={
                        styles.patient_service_content_layout_dropdown_item_head_description
                      }
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
