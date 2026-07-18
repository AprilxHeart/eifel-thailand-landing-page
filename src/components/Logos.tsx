'use client';

import React from 'react';
import Image from 'next/image';
import { FiCheckCircle, FiDroplet, FiSettings, FiShield, FiTruck, FiZap } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const Logos: React.FC = () => {
    const { language, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section id="logos" className="py-16 px-5 bg-gray-50 dark:bg-gray-900 transition-colors">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-8"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mb-2"></div>
                                <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const industries = [
        { th: 'โรงงาน', en: 'Factories', icon: FiSettings },
        { th: 'อาคารและโรงแรม', en: 'Buildings & Hotels', icon: FiDroplet },
        { th: 'ระบบดับเพลิง', en: 'Fire Systems', icon: FiShield },
        { th: 'บำบัดน้ำเสีย', en: 'Wastewater', icon: FiZap },
        { th: 'เทศบาล', en: 'Municipal', icon: FiTruck },
    ];

    return (
        <section id="logos" className="section-band bg-background px-5 py-12 transition-colors">
            <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase text-primary">
                        {language === 'th' ? 'พื้นที่ใช้งานจริง' : 'Real operating environments'}
                    </p>
                    <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight text-foreground md:text-4xl">
                        {language === 'th'
                            ? 'ออกแบบให้เข้ากับงานระบบที่ต้องเดินเครื่องต่อเนื่อง'
                            : 'Built for systems that need to keep running'}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-8 text-foreground-accent">
                        {language === 'th'
                            ? 'เลือกปั๊มตามสภาพหน้างานจริง ทั้งแรงดัน อัตราการไหล ของเหลว มาตรฐานความปลอดภัย และการดูแลหลังติดตั้ง'
                            : 'Pump selection follows actual site conditions, including pressure, flow rate, liquid type, safety standards, and after-sales service.'}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <div key={industry.en} className="border border-black/10 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <Icon className="h-5 w-5 text-primary" />
                                    <p className="mt-3 text-sm font-semibold text-foreground">
                                        {industry[language]}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="relative min-h-[360px] overflow-hidden bg-luxury-black">
                        <Image
                            src="/images/working/34332_0.jpg"
                            alt="EIFEL installation work"
                            fill
                            sizes="(max-width: 1024px) 100vw, 430px"
                            className="object-cover opacity-86"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                        <div className="absolute bottom-0 p-6 text-white">
                            <p className="text-sm font-semibold text-[var(--signal)]">Site support</p>
                            <p className="mt-2 text-xl font-bold">
                                {language === 'th' ? 'สำรวจหน้างานและติดตั้ง' : 'Site survey and installation'}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div className="relative min-h-[172px] overflow-hidden bg-luxury-black">
                            <Image
                                src="/images/Trust/output-003.png"
                                alt="EIFEL certification document"
                                fill
                                sizes="(max-width: 1024px) 100vw, 360px"
                                className="object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                            <div className="absolute bottom-0 p-5 text-white">
                                <FiCheckCircle className="h-5 w-5 text-[var(--signal)]" />
                                <p className="mt-2 font-semibold">ISO / UL / PSB</p>
                            </div>
                        </div>
                        <div className="border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                            <p className="text-sm font-semibold uppercase text-primary">
                                {language === 'th' ? 'บริการครบวงจร' : 'End-to-end service'}
                            </p>
                            <p className="mt-3 text-2xl font-bold text-foreground">
                                {language === 'th' ? 'เลือกสเปก ส่งมอบ ติดตั้ง ซ่อม อะไหล่' : 'Select, deliver, install, repair, supply parts'}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-foreground-accent">
                                {language === 'th'
                                    ? 'เหมาะกับทีมจัดซื้อ วิศวกร และฝ่ายซ่อมบำรุงที่ต้องการคุยกับทีมเทคนิคในไทย'
                                    : 'Made for procurement, engineering, and maintenance teams that need local technical support.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos
