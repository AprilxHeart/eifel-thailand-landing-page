'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiCheckCircle, FiPhoneCall, FiSettings, FiTool, FiTruck, FiUsers } from 'react-icons/fi';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { useLanguage } from '@/contexts/LanguageContext';

const supportCards = {
  th: [
    {
      title: 'คุยสเปกกับทีมไทย',
      description: 'ช่วยคัดรุ่นจากอัตราการไหล แรงดัน ของเหลว มาตรฐานความปลอดภัย และข้อจำกัดของพื้นที่ติดตั้งจริง',
      icon: FiUsers,
    },
    {
      title: 'ติดตั้งและทดสอบหน้างาน',
      description: 'วางแผนส่งมอบ ประสานงานติดตั้ง และตรวจเช็กการทำงานก่อนส่งต่อให้ทีมใช้งานจริง',
      icon: FiTruck,
    },
    {
      title: 'ซ่อม บำรุง และอะไหล่',
      description: 'ดูแลหลังการขาย ซ่อมบำรุง จัดหาอะไหล่ และช่วยลดเวลาหยุดเครื่องเมื่อระบบมีปัญหา',
      icon: FiTool,
    },
    {
      title: 'รองรับงานระบบต่อเนื่อง',
      description: 'เหมาะกับโรงงาน อาคาร และระบบสาธารณูปโภคที่ต้องการคู่ค้าที่คุยได้ทั้งสินค้าและงานบริการ',
      icon: FiSettings,
    },
  ],
  en: [
    {
      title: 'Thai team for pump sizing',
      description: 'Support starts with matching flow, head, fluid type, safety requirements, and actual site constraints.',
      icon: FiUsers,
    },
    {
      title: 'Installation and commissioning',
      description: 'The team coordinates delivery, installation, and pre-handover checks before the system goes live.',
      icon: FiTruck,
    },
    {
      title: 'Repair, service, and spare parts',
      description: 'After-sales support covers maintenance, repair, parts sourcing, and faster recovery when downtime happens.',
      icon: FiTool,
    },
    {
      title: 'Built for ongoing system support',
      description: 'A stronger fit for factories, buildings, and utilities that need both product expertise and local service.',
      icon: FiSettings,
    },
  ],
};

const processSteps = {
  th: ['สำรวจความต้องการ', 'เลือกซีรีส์และสเปก', 'ติดตั้งและทดสอบ', 'ดูแลหลังการขาย'],
  en: ['Assess the job', 'Select series and spec', 'Install and test', 'Support after handover'],
};

const Team: React.FC = () => {
  const { language, isLoading } = useLanguage();
  const copy = language === 'th' ? supportCards.th : supportCards.en;
  const steps = language === 'th' ? processSteps.th : processSteps.en;

  if (isLoading) {
    return (
      <div className="bg-luxury-black py-16 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="h-96 animate-pulse bg-white/10" />
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-44 animate-pulse bg-white/10" />
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <section className="bg-luxury-black py-16 text-white lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--signal)]">
              {language === 'th' ? 'เครือข่ายบริการในประเทศไทย' : 'Thailand service network'}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              {language === 'th' ? 'จากการคัดสเปกถึงงานบริการหลังติดตั้ง โดยทีมไทย' : 'From pump selection to field support, handled by the Thai team'}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              {language === 'th'
                ? 'ลูกค้าฝั่งโรงงาน อาคาร และงานสาธารณูปโภคต้องการมากกว่ารายชื่อรุ่นปั๊ม ทีมไทยจึงเข้ามาช่วยตั้งแต่คัดสเปก ประสานงานติดตั้ง ไปจนถึงซ่อมบำรุงและอะไหล่'
                : 'For factories, buildings, and utility projects, the value is not only the pump itself. The Thai team supports specification, installation coordination, maintenance, and spare-parts continuity.'}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="image-outline relative overflow-hidden border border-white/[0.12] bg-white/[0.06]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/Thai_team/34319_0.jpg"
                    alt={language === 'th' ? 'ทีมไทยให้คำปรึกษาเรื่องสเปกปั๊ม' : 'Thai team supporting pump specification'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="image-outline relative overflow-hidden border border-white/[0.12] bg-white/[0.06]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/working/34332_0.jpg"
                    alt={language === 'th' ? 'งานติดตั้งและดูแลหน้างาน' : 'Installation and field support'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="surface-card-dark mt-8 border border-white/[0.12] p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 h-5 w-5 text-[var(--signal)]" />
                <div>
                  <p className="text-lg font-semibold text-white">
                    {language === 'th' ? 'คุยสเปกและแผนบริการได้ในทีมเดียว' : 'Discuss product fit and service planning with one local team'}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {language === 'th'
                      ? 'ทีมไทยช่วยแปลงเงื่อนไขหน้างานจริงให้เป็นรุ่นปั๊ม แผนติดตั้ง และแนวทางดูแลหลังส่งมอบ จึงลดเวลาคุยงานและลดความคลาดเคลื่อนระหว่างสเปกกับการใช้งานจริง'
                      : 'A local representative helps translate real site conditions into the right model, installation plan, and after-sales path, which makes procurement and handover easier to manage.'}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`tel:${siteDetails.companyInfo.phone}`}
                  className="pressable inline-flex min-h-[50px] items-center justify-center gap-3 bg-[var(--signal)] px-5 py-3 text-sm font-semibold text-luxury-black hover:brightness-105"
                >
                  <FiPhoneCall className="h-4 w-4" />
                  {siteDetails.companyInfo.phone}
                </Link>
                <Link
                  href={`mailto:${siteDetails.companyInfo.email}`}
                  className="pressable inline-flex min-h-[50px] items-center justify-center gap-3 border border-white/16 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-luxury-black"
                >
                  {siteDetails.companyInfo.email}
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="surface-card-dark border border-white/[0.12] p-6 backdrop-blur">
                    <div className="flex h-12 w-12 items-center justify-center bg-white/10 text-[var(--signal)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="surface-card-dark mt-6 border border-white/[0.12] bg-gradient-to-r from-white/[0.08] to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/54">
                {language === 'th' ? 'ลำดับการทำงาน' : 'Project flow'}
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step} className="border border-white/10 bg-black/20 px-4 py-4">
                    <p className="text-xs font-semibold tracking-[0.24em] text-[var(--signal)]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/84">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
