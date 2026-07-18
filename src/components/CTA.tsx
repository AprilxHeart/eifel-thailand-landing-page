'use client';

import Link from 'next/link';
import { FiMail, FiPhoneCall, FiSend } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteDetails } from '@/data/siteDetails';

const CTA: React.FC = () => {
    const { language, t, isLoading } = useLanguage();
    const subject = encodeURIComponent(language === 'th' ? 'ขอใบเสนอราคา EIFEL Pump' : 'Request quotation for EIFEL Pump');
    const body = encodeURIComponent(language === 'th'
        ? 'สวัสดีครับ/ค่ะ ต้องการขอใบเสนอราคาและคำปรึกษาเกี่ยวกับปั๊มน้ำ EIFEL\n\nรายละเอียดงาน:\n'
        : 'Hello, I would like to request a quotation and consultation for EIFEL pumps.\n\nRequirement:\n');

    if (isLoading) {
        return (
            <section id="cta" className="my-14">
                <div className="h-64 animate-pulse bg-gray-200 dark:bg-gray-700" />
            </section>
        );
    }

    return (
        <section id="cta" className="my-14">
            <div className="relative overflow-hidden bg-luxury-black px-6 py-12 text-white shadow-2xl md:px-10">
                <div className="absolute inset-0 industrial-grid opacity-20" />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase text-[var(--signal)]">
                            {language === 'th' ? 'พร้อมคุยสเปกหน้างาน' : 'Ready to discuss your pump spec'}
                        </p>
                        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                            {t.cta.title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                            {t.cta.description}
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[520px]">
                        <Link href="#contact" className="inline-flex min-h-[56px] items-center justify-center gap-3 bg-primary px-5 py-4 font-semibold text-white transition hover:bg-primary-accent">
                            <FiSend className="h-5 w-5" />
                            {language === 'th' ? 'กรอกฟอร์ม' : 'Open form'}
                        </Link>
                        <a href={`tel:${siteDetails.companyInfo.phone}`} className="inline-flex min-h-[56px] items-center justify-center gap-3 border border-white/18 bg-white/10 px-5 py-4 font-semibold text-white transition hover:bg-white hover:text-foreground">
                            <FiPhoneCall className="h-5 w-5" />
                            {language === 'th' ? 'โทรเลย' : 'Call'}
                        </a>
                        <a href={`mailto:${siteDetails.companyInfo.email}?cc=${siteDetails.companyInfo.alternativeEmail}&subject=${subject}&body=${body}`} className="inline-flex min-h-[56px] items-center justify-center gap-3 bg-[var(--signal)] px-5 py-4 font-semibold text-luxury-black transition hover:brightness-105">
                            <FiMail className="h-5 w-5" />
                            {language === 'th' ? 'ส่งอีเมล' : 'Email'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
