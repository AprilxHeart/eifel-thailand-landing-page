'use client';

import React from 'react';
import Image from 'next/image';
import { FiActivity, FiAnchor, FiDroplet, FiLayers, FiShield, FiWind } from 'react-icons/fi';

import Container from './Container';
import { useLanguage } from '@/contexts/LanguageContext';

const applicationCards = {
  th: [
    {
      title: 'อาคารและระบบน้ำอาคาร',
      description: 'เหมาะกับอาคารพาณิชย์ ระบบเพิ่มแรงดัน ระบบหมุนเวียนน้ำร้อน และระบบจ่ายน้ำที่ต้องเดินต่อเนื่อง',
      icon: FiLayers,
    },
    {
      title: 'ระบบปรับอากาศและคูลลิงทาวเวอร์',
      description: 'รองรับงานปรับอากาศ ระบบทำความร้อน ระบบน้ำเย็น และการหมุนเวียนน้ำในอาคารหรือโรงงาน',
      icon: FiWind,
    },
    {
      title: 'ระบบดับเพลิง',
      description: 'ซีรีส์ EHF และ ESF เหมาะกับระบบดับเพลิงที่ต้องการมาตรฐาน UL Listed',
      icon: FiShield,
    },
    {
      title: 'โรงงานและกระบวนการผลิต',
      description: 'ใช้ได้กับงานหล่อเย็น งานล้าง งานถ่ายเทของเหลวในกระบวนการผลิต และงานอุตสาหกรรมทั่วไป',
      icon: FiActivity,
    },
    {
      title: 'น้ำเสียและสาธารณูปโภค',
      description: 'ครอบคลุมระบบบำบัดน้ำเสีย งานขนส่งน้ำเสีย และสาธารณูปโภคด้านน้ำในโรงงานหรือเทศบาล',
      icon: FiDroplet,
    },
    {
      title: 'เกษตร ทะเล และงานเฉพาะทาง',
      description: 'รองรับงานชลประทาน งานเรือ และงานสาธารณูปโภคที่ต้องใช้ปั๊มหลายหน้าที่ในระบบเดียวกัน',
      icon: FiAnchor,
    },
  ],
  en: [
    {
      title: 'Building water systems',
      description: 'Fits commercial buildings, pressure boosting, hot-water recirculation, and continuous-duty supply systems.',
      icon: FiLayers,
    },
    {
      title: 'HVAC and cooling towers',
      description: 'The brochure explicitly calls out air conditioning, heating, chilled water, and circulation duties.',
      icon: FiWind,
    },
    {
      title: 'Fire protection',
      description: 'EHF and ESF should stay prominent because UL Listed fire-pump capability is one of the strongest trust signals.',
      icon: FiShield,
    },
    {
      title: 'Factories and process work',
      description: 'Suitable for industrial cooling, wash-down, process-liquid transfer, and broader plant utility requirements.',
      icon: FiActivity,
    },
    {
      title: 'Wastewater and utilities',
      description: 'Coverage includes municipal wastewater treatment, sewage transport, and industrial wastewater systems.',
      icon: FiDroplet,
    },
    {
      title: 'Agriculture, marine, and special duties',
      description: 'The brochure also points to irrigation, marine ballasting, bilge, and other mixed utility applications.',
      icon: FiAnchor,
    },
  ],
};

const manufacturerFacts = {
  th: [
    'ก่อตั้งเดือนกันยายน 2004 ที่ฝูโจว ประเทศจีน',
    'มีปั๊มน้ำมากกว่า 10 ซีรีส์สำหรับงานหลายประเภท',
    'ฐานการผลิตขนาดประมาณ 32,000 ตร.ม.',
    'มีศูนย์ทดสอบปั๊มขนาดใหญ่ระดับประเทศ ความแม่นยำระดับ 2',
    'อ้างอิงการรับรอง UL, PSB และ ISO 9001:2015',
  ],
  en: [
    'Founded in September 2004 in Fuzhou, China',
    'The brochure states more than 10 pump series',
    'Production base of about 32,000 square meters',
    'National large pump testing center with grade 2 accuracy',
    'Referenced certifications include UL, PSB, and ISO 9001:2015',
  ],
};

const WorkingEnvironment: React.FC = () => {
  const { language, isLoading } = useLanguage();
  const applications = language === 'th' ? applicationCards.th : applicationCards.en;
  const facts = language === 'th' ? manufacturerFacts.th : manufacturerFacts.en;

  if (isLoading) {
    return (
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="h-80 animate-pulse bg-gray-200" />
        </Container>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16 transition-colors dark:bg-gray-900 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="eyebrow text-sm font-semibold uppercase text-primary">
              {language === 'th' ? 'ประเภทงานที่รองรับ' : 'System fit and applications'}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-5xl">
              {language === 'th' ? 'เลือกซีรีส์ให้ตรงกับงานระบบที่คุณดูแล' : 'Choose the right series for the system you need to run'}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
              {language === 'th'
                ? 'EIFEL ครอบคลุมทั้งระบบน้ำอาคาร ระบบปรับอากาศ ระบบดับเพลิง งานกระบวนการผลิต น้ำเสีย และงานสาธารณูปโภคหลายแบบ จึงควรสื่อให้เห็นชัดว่าซีรีส์ต่าง ๆ เชื่อมกับงานจริงประเภทใดบ้าง'
                : 'EIFEL covers building water systems, HVAC, fire protection, process work, wastewater, and broader utility duties. Showing that fit clearly helps buyers and engineers shortlist the right series faster.'}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {applications.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="surface-card rounded-[1.75rem] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div className="surface-card image-outline overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/working/34327_0.jpg"
                  alt={language === 'th' ? 'ฐานการผลิตและการทดสอบของ EIFEL' : 'EIFEL manufacturing and testing environment'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-black/8 p-6 dark:border-white/10">
                <p className="eyebrow text-sm font-semibold uppercase text-primary">
                  {language === 'th' ? 'ภาพรวมผู้ผลิต' : 'Manufacturer footprint'}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {language === 'th' ? 'ภาพรวมโรงงานและความพร้อมด้านการผลิต' : 'Factory scale and production readiness'}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {language === 'th'
                    ? 'ข้อมูลฝั่งผู้ผลิตช่วยตอบคำถามเรื่องมาตรฐาน โรงงาน และความมั่นใจในการใช้งานระยะยาวได้ชัดกว่าการบอกเพียงว่าคุณภาพสูง'
                    : 'Manufacturer-side facts make the page more convincing than broad claims alone, especially for buyers comparing standards, scale, and long-term support confidence.'}
                </p>
              </div>
            </div>

            <div className="surface-card rounded-[2rem] bg-[var(--industrial-steel)] p-6">
              <div className="grid gap-3">
                {facts.map((fact) => (
                  <div key={fact} className="rounded-[1.2rem] border border-black/8 bg-white/75 px-4 py-4 text-sm leading-7 text-gray-700 dark:border-white/10 dark:bg-black/20 dark:text-gray-200">
                    {fact}
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

export default WorkingEnvironment;
