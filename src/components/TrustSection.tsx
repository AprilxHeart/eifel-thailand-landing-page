'use client';

import React from 'react';
import Image from 'next/image';
import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiAward, FiCheckCircle, FiFileText, FiShield } from 'react-icons/fi';

const proofItems = [
  {
    name: 'ISO 9001:2015',
    detailTh: 'ระบบบริหารคุณภาพของผู้ผลิต',
    detailEn: 'Manufacturer quality management system',
    image: '/images/Trust/PDF2 (11).png',
  },
  {
    name: 'UL Listed',
    detailTh: 'สำหรับปั๊มดับเพลิงบางซีรีส์',
    detailEn: 'For selected fire pump series',
    image: '/images/Trust/output-003.png',
  },
  {
    name: 'PSB Singapore',
    detailTh: 'เอกสารรับรองที่พบในข้อมูลแบรนด์',
    detailEn: 'Certification referenced in brand documents',
    image: '/images/Trust/output-005.png',
  },
];

const TrustSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="section-band bg-[var(--industrial-steel)] py-16 transition-colors">
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-sm font-semibold uppercase text-primary">
              {language === 'th' ? 'เอกสารและมาตรฐาน' : 'Documents and standards'}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {t.trust.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground-accent">
              {language === 'th'
                ? 'มาตรฐานการผลิต ใบรับรอง และทีมบริการในประเทศไทยคือสามส่วนที่ช่วยให้ลูกค้าประเมินความเหมาะสมของแบรนด์ได้เร็วขึ้น'
                : 'Manufacturing standards, certification evidence, and local Thai service make the brand easier to evaluate for engineering and procurement teams.'}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="surface-card rounded-[1.75rem] p-5">
                <p className="eyebrow text-xs font-semibold uppercase text-primary">
                  {language === 'th' ? 'ผู้ผลิต' : 'Manufacturer'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  Eifel Pump (Fuzhou) Corpn., Ltd.
                </h3>
                <p className="mt-2 text-sm leading-7 text-foreground-accent">
                  {language === 'th'
                    ? 'ฝั่งผู้ผลิตเป็นแหล่งอ้างอิงเรื่องมาตรฐาน เอกสารรับรอง และข้อมูลโรงงานที่ใช้ประกอบการตัดสินใจ'
                    : 'The manufacturer side anchors the certifications, standards, and factory credentials used throughout the page.'}
                </p>
              </div>
              <div className="surface-card rounded-[1.75rem] p-5">
                <p className="eyebrow text-xs font-semibold uppercase text-primary">
                  {language === 'th' ? 'ทีมในประเทศไทย' : 'Thailand representative'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {language === 'th' ? 'วอเตอร์เทค เซลล์ แอนด์ เซอร์วิส' : 'Watertech Sales and Service'}
                </h3>
                <p className="mt-2 text-sm leading-7 text-foreground-accent">
                  {language === 'th'
                    ? 'ตัวแทนไทยรับบทในงานคัดสเปก ประสานติดตั้ง ซ่อมบำรุง และจัดหาอะไหล่เพื่อให้หน้างานเดินต่อได้'
                    : 'The Thai representative carries local consultation, installation coordination, repair, and spare-parts continuity.'}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: FiShield, label: language === 'th' ? 'มาตรฐานปั๊มดับเพลิง' : 'Fire pump standards' },
                { icon: FiFileText, label: language === 'th' ? 'เอกสารตรวจสอบได้' : 'Traceable documents' },
                { icon: FiAward, label: language === 'th' ? 'ทีมไทยดูแลต่อ' : 'Local Thai support' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="surface-card rounded-[1.4rem] p-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofItems.map((cert) => (
              <div key={cert.name} className="surface-card rounded-[1.8rem] p-4">
                <div className="image-outline relative h-44 overflow-hidden rounded-[1.15rem] bg-gray-100 dark:bg-black/20">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className="object-cover"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="h-4 w-4 text-primary" />
                    <p className="font-bold text-foreground">{cert.name}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-foreground-accent">
                    {language === 'th' ? cert.detailTh : cert.detailEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
