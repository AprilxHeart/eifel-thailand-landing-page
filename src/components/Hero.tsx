'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiMail, FiPhoneCall, FiShield } from 'react-icons/fi';

import { heroDetails } from '@/data/hero';
import { siteDetails } from '@/data/siteDetails';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t, language, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section className="relative flex items-center justify-center min-h-screen pb-0 pt-32 md:pt-40 px-5">
                <div className="text-center max-w-7xl mx-auto">
                    <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-6"></div>
                    <div className="w-96 h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-6"></div>
                    <div className="w-80 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-10"></div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="hero"
            className="relative isolate min-h-[92svh] overflow-hidden bg-luxury-black px-5 pb-12 pt-28 text-white md:pt-32"
        >
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/working/34327_0.jpg"
                    alt="EIFEL pump manufacturing and engineering facility"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,17,22,0.94)_0%,rgba(10,17,22,0.8)_42%,rgba(10,17,22,0.38)_100%)]" />
            <div className="absolute inset-0 -z-10 industrial-grid opacity-35" />
            <div className="absolute bottom-0 left-0 right-0 -z-10 h-36 bg-gradient-to-t from-background to-transparent" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="max-w-3xl">
                    <div className="eyebrow mb-6 inline-flex items-center gap-2 border-l-4 border-[var(--signal)] bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur">
                        <FiShield className="h-4 w-4 text-[var(--signal)]" />
                        {language === 'th'
                            ? 'ตัวแทนจำหน่ายและทีมบริการ EIFEL ในประเทศไทย'
                            : 'EIFEL distributor and service team in Thailand'}
                    </div>
                
                    <h1 className="display-face max-w-4xl text-5xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                        Eifel Thailand
                    </h1>
                
                    <p className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-[var(--signal)] md:text-2xl">
                        {language === 'th'
                            ? 'ปั๊มน้ำอุตสาหกรรม ปั๊มดับเพลิง และระบบบำบัดน้ำเสีย สำหรับโรงงานและอาคารที่ต้องการความเชื่อถือสูง'
                            : 'Industrial, fire protection, and wastewater pump solutions for facilities that cannot afford downtime'}
                    </p>
                
                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                        {t.hero.description}
                    </p>
                    
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link 
                            href="#pricing" 
                            className="pressable group inline-flex min-h-[52px] items-center justify-center gap-3 bg-primary px-7 py-4 text-base font-semibold text-white shadow-2xl shadow-black/25 hover:bg-primary-accent"
                        >
                            {t.hero.ctaPrimary}
                            <FiArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                        </Link>
                        <Link 
                            href="#contact" 
                            className="pressable inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/45 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-foreground"
                        >
                            <FiMail className="h-5 w-5" />
                            {t.hero.ctaSecondary}
                        </Link>
                    </div>

                    <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden border border-white/16 bg-white/16 text-sm sm:grid-cols-4">
                        {[
                            { value: 'UL', label: language === 'th' ? 'ปั๊มดับเพลิง' : 'Fire pump' },
                            { value: 'ISO', label: language === 'th' ? 'ระบบคุณภาพ' : 'Quality system' },
                            { value: 'TH', label: language === 'th' ? 'ทีมไทย' : 'Local team' },
                            { value: 'CARE', label: language === 'th' ? 'ซ่อมและอะไหล่' : 'Repair and parts' },
                        ].map((item) => (
                            <div key={item.value} className="bg-black/25 px-4 py-4 backdrop-blur">
                                <div className="text-xl font-bold text-white">{item.value}</div>
                                <div className="mt-1 text-xs uppercase tracking-normal text-white/68">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                    <div className="absolute inset-x-8 bottom-4 h-24 bg-primary/30 blur-3xl" />
                    <div className="image-outline relative ml-auto border border-white/18 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
                        <div className="relative aspect-[4/3] overflow-hidden bg-white">
                            <Image
                                src={heroDetails.centerImageSrc}
                                alt="EIFEL industrial pump"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 520px"
                                className="object-contain p-6"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-black/90 to-transparent p-5">
                                <p className="text-sm font-semibold text-white">
                                    EA / EH / EHF / ESF / EJ Series
                                </p>
                                <p className="mt-1 text-xs text-white/70">
                                    {language === 'th'
                                        ? 'เลือกสเปก ติดตั้ง และดูแลหลังการขายโดยทีมไทย'
                                        : 'Specification, installation, and local after-sales support'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        href={`tel:${siteDetails.companyInfo.phone}`}
                        className="pressable absolute -bottom-5 right-4 inline-flex min-h-[52px] items-center gap-3 bg-[var(--signal)] px-5 py-3 text-sm font-bold text-luxury-black shadow-xl hover:brightness-105 sm:right-8"
                    >
                        <FiPhoneCall className="h-5 w-5" />
                        {siteDetails.companyInfo.phone}
                    </a>
                </div>
            </div>

            <div className="relative mx-auto mt-12 max-w-7xl border-t border-white/16 pt-6">
                <div className="grid gap-4 text-white/76 md:grid-cols-3">
                    <div>
                        <p className="text-sm font-semibold text-white">
                            {language === 'th' ? 'กลุ่มปั๊มอุตสาหกรรม' : 'Industrial pump supply'}
                        </p>
                        <p className="mt-1 text-sm">
                            {language === 'th' ? 'ปั๊มอุตสาหกรรม ปั๊มน้ำเสีย ปั๊มสุญญากาศ' : 'Industrial, wastewater, and vacuum pump series'}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white">
                            {language === 'th' ? 'ระบบดับเพลิง' : 'Fire protection'}
                        </p>
                        <p className="mt-1 text-sm">
                            {language === 'th' ? 'ปั๊มดับเพลิงซีรีส์ EHF / ESF สำหรับระบบความปลอดภัย' : 'EHF / ESF fire pump series for safety systems'}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white">
                            {language === 'th' ? 'ทีมบริการในไทย' : 'Local service team'}
                        </p>
                        <p className="mt-1 text-sm">
                            {language === 'th' ? 'ให้คำปรึกษา ออกแบบ ติดตั้ง ซ่อม และจัดหาอะไหล่' : 'Consulting, installation, repair, and spare parts sourcing'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
