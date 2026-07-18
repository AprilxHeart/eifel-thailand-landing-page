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
            <p className="text-sm font-semibold uppercase text-primary">
              {language === 'th' ? 'เอกสารและมาตรฐาน' : 'Documents and standards'}
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {t.trust.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground-accent">
              {language === 'th'
                ? 'ใช้ข้อมูลมาตรฐานที่พบในเอกสารแบรนด์และภาพใบรับรองจริงเป็นแกน แยกให้ชัดระหว่างผู้ผลิต EIFEL และทีมบริการไทย เพื่อให้เว็บน่าเชื่อถือขึ้นทันที'
                : 'The section now leads with documented standards and real certificate imagery, while clearly separating EIFEL manufacturing credentials from Thai local service.'}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: FiShield, label: language === 'th' ? 'Fire pump standards' : 'Fire pump standards' },
                { icon: FiFileText, label: language === 'th' ? 'เอกสารตรวจสอบได้' : 'Traceable documents' },
                { icon: FiAward, label: language === 'th' ? 'ทีมไทยดูแลต่อ' : 'Local Thai support' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofItems.map((cert) => (
              <div key={cert.name} className="border border-black/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-white/5">
                <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-black/20">
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
